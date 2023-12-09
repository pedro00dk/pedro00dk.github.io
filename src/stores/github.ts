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

export type Repository = {
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
    fetching?: boolean
    fetchingError?: Error
    repos?: Repository[]
}

export const [github$, setGithub$] = createStore<Store>({})

const fetchRepositories = async () => {
    let expire = +(localStorage.getItem('github-repos-expire') ?? '0')
    let repos: Repository[] = JSON.parse(localStorage.getItem('github-repos') ?? '[]')
    if (expire > Date.now()) return setGithub$({ repos })
    setGithub$({ fetching: true })
    const response = await fetch('https://api.github.com/users/pedro00dk/repos?per_page=100', { method: 'get' })
    repos = await response.json()
    localStorage.setItem('github-repos-expire', `${Date.now() + 86400000}`)
    localStorage.setItem('github-repos', JSON.stringify(repos))
    setGithub$({ fetching: false, repos })
}

export const github$Actions = { fetchRepositories }
