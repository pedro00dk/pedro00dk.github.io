import { RouteDefinition, RouteSectionProps } from '@solidjs/router'
import { github$ } from '../../stores/github'

export const repoRouter = () => ({ path: '/:name', component: Repo } as RouteDefinition)

export const Repo = (props: RouteSectionProps) => {
    const repo = () => github$.repos?.find(({ name }) => name === props.params.name)
    return <div>{JSON.stringify(repo())}</div>
}
