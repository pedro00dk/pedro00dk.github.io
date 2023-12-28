import { RouteDefinition, RouteSectionProps } from '@solidjs/router'
import { createMemo, createResource } from 'solid-js'
import { github$ } from '../stores/github'

export const repoRouter = () => ({ path: '/:name', load, component: Repository } as RouteDefinition)

const load = () => {
    // const readmeUrl =
}

export const Repository = (props: RouteSectionProps) => {
    const repo = createMemo(() => github$.repos?.find(({ name }) => name === props.params.name))
    const [readme] = createResource(repo, repo =>
        fetch(`https://raw.githubusercontent.com/${repo.full_name}/main/README.md`).then(res => res.text()),
    )

    return (
        <article>
            <h1>{repo()?.full_name}</h1>
            <p>{repo()?.description}</p>
            <div style={{ 'white-space': 'pre-wrap' }}>{readme()}</div>
            {repo()?.homepage && <iframe src={repo()?.homepage} width={'80%'} height={'800px'} />}
        </article>
    )
}
