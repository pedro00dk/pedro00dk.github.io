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
    repos?: Repo[]
    groups?: { [group: string]: Repo[] }
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
    const groups: Store['groups'] = {}
    repos.forEach(repo => repo.topics.forEach(topic => topic.startsWith('gio-') && (groups[topic] ??= []).push(repo)))
    setGithub$({ repos, groups })
}, 'repos')

export const githubActions = { fetchRepos }
