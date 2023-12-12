import { RouteDefinition, createAsync } from '@solidjs/router'
import { For, Suspense } from 'solid-js'
import { Repo, github$, githubActions } from '../stores/github'
import { repoRouter } from './Repository'

export const router = (): RouteDefinition => ({
    children: [{ component: App }, { path: '/repos', children: repoRouter() }],
})

export const App = () => {
    const waits = [createAsync(githubActions.fetchRepos)]
    return (
        <article>
            <h1>pedro00dk.github.io</h1>
            <Suspense fallback='loading...'>
                {void waits.map(wait => wait())}
                <Repositories repos={github$.repos ?? []} />
                <For each={Object.entries(github$.groups ?? {})}>
                    {([group, repos]) => (
                        <>
                            <h2>{group}</h2>
                            <Repositories repos={repos} />
                        </>
                    )}
                </For>
            </Suspense>
        </article>
    )
}

const Repositories = (props: { repos: Repo[] }) => {
    return (
        <ul>
            <For each={props.repos}>{repo => <Repository {...repo} />}</For>
        </ul>
    )
}

const Repository = (props: Repo) => (
    <section>
        <header>
            <h2>{<a href={`/repos/${props.name}`}>{props.name}</a>}</h2>
            <div>{props.language}</div>
        </header>
        <p>{props.description}</p>
    </section>
)
