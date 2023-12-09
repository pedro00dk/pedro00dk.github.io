import { RouteDefinition } from '@solidjs/router'
import { For } from 'solid-js'
import { github$ } from '../stores/github'

export const appRouter = (): RouteDefinition => ({
    path: '/',
    component: App,
})

export const App = () => {
    return (
        <article>
            <h1>pedro00dk.github.io</h1>
            <ul>
                <For each={github$.repos ?? []}>
                    {repo => (
                        <li>
                            <header>{repo.name}</header>
                        </li>
                    )}
                </For>
            </ul>
        </article>
    )
}
