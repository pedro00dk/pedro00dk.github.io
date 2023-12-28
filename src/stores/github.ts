import { cache } from '@solidjs/router'
import { createStore } from 'solid-js/store'

export type Owner = {
    type: string
    login: string
    avatar_url: string
    url: string
    html_url: string
    gists_url: string
    repos_url: string
}

export type Repo = {
    owner: Owner
    name: string
    full_name: string
    description: string
    fork: boolean
    url: string
    html_url: string
    languages_url: string
    homepage: string
    created_at: string // ISO 8601
    updated_at: string // ISO 8601
    pushed_at: string // ISO 8601
    size: number
    language: string | null
    stargazers_count: number
    watchers_count: number
    forks_count: number
    open_issues_count: number
    archived: boolean
    disabled: boolean
    license: { key: string; name: string; spdx_id: string; url: string } | null
    topics: string[]
    default_branch: string
}

export type Store = {
    owner?: Owner
    repos?: Repo[]
    groups?: ReturnType<typeof getGroups>
}

export const [github$, setGithub$] = createStore<Store>({})

const fetchRepos = cache(async () => {
    const expire = +(localStorage.getItem('github-repos-expire') ?? '0')
    const repos: Repo[] =
        expire < Date.now()
            ? JSON.parse(localStorage.getItem('github-repos') ?? '[]')
            : await (await fetch('https://api.github.com/users/pedro00dk/repos?per_page=100')).json()
    localStorage.setItem('github-repos-expire', `${Date.now() + 86400000}`)
    localStorage.setItem('github-repos', JSON.stringify(repos))
    setGithub$({ owner: repos.at(0)?.owner, repos, groups: getGroups(repos) })
}, 'repos')

const getGroups = (repos: Repo[]) => {
    const orderPrefix = 'gio-order-'
    const groupPrefix = 'gio-group-'
    const ghpName = `${repos[0].owner.login}.github.io`
    const ghpRepo = repos.find(({ name }) => name === ghpName)!
    const order = ghpRepo.topics
        .filter(t => t.startsWith(orderPrefix))
        .map(t => t.slice(orderPrefix.length))
        .map(o => ({ group: o.slice(o.indexOf('-') + 1), order: +o.slice(0, o.indexOf('-')) }))
        .sort(({ order: a }, { order: b }) => a - b)
        .map(({ group }) => group)
    const groups = [...new Set(repos.flatMap(({ topics }) => topics))]
        .filter(t => t.startsWith(groupPrefix))
        .map(t => ({ group: t.slice(groupPrefix.length), repos: repos.filter(({ topics }) => topics.includes(t)) }))
        .sort(({ group: a }, { group: b }) => order.indexOf(a) - order.indexOf(b))
    return groups
}

export const githubActions = { fetchRepos }
