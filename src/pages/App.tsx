import { RouteDefinition, createAsync } from '@solidjs/router'
import { For, Suspense } from 'solid-js'
import { Icon } from '../components/Icon'
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
                <For each={Object.entries(github$.groups ?? {})}>
                    {([group, repos]) => (
                        <>
                            <h2>{group}</h2>
                            <Repositories repos={repos} />
                        </>
                    )}
                </For>
                <h2>Other</h2>
                <Repositories repos={github$.repos ?? []} />
            </Suspense>
        </article>
    )
}

const Repositories = (props: { repos: Repo[] }) => {
    return <ul>{<For each={props.repos}>{repo => <li>{<Repository {...repo} />}</li>}</For>}</ul>
}

const Repository = (props: Repo) => (
    <section>
        <header>
            <h2>{<a href={`/repos/${props.name}`}>{props.name}</a>}</h2>
            {props.language && <Icon name={props.language} style={{ 'inline-size': '32px' }} />}
        </header>
        <p>{props.description}</p>
    </section>
)
