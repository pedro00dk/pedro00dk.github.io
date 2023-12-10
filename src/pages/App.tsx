import { RouteDefinition } from '@solidjs/router'
import { For } from 'solid-js'
import { github$ } from '../stores/github'
import { repoRouter } from './repo/Repo'

export const appRouter = (): RouteDefinition => ({
    children: [{ component: App }, { path: '/repos', children: repoRouter() }],
})

export const App = () => {
    return (
        <article>
            <h1>pedro00dk.github.io</h1>
            <Repositories />
        </article>
    )
}

const Repositories = () => {
    return (
        <ul>
            <For each={github$.repos ?? []}>
                {repo => (
                    <li>
                        <header>
                            <a href={repo.html_url} target='_blank'>
                                {repo.name}
                            </a>
                            <div>
                                <a href={`/repos/${repo.name}`}>{repo.language}</a>
                            </div>
                        </header>
                        <p>{repo.description}</p>
                        <ul>
                            <For each={repo.topics}>{topic => <li>{topic}</li>}</For>
                        </ul>
                    </li>
                )}
            </For>
        </ul>
    )
}
