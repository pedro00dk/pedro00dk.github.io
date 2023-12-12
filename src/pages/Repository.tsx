import { RouteDefinition, RouteSectionProps } from '@solidjs/router'
import { github$ } from '../stores/github'

export const repoRouter = () => ({ path: '/:name', component: Repository } as RouteDefinition)

export const Repository = (props: RouteSectionProps) => {
    const repo = () => github$.repos?.find(({ name }) => name === props.params.name)
    return <div>{JSON.stringify(repo())}</div>
}
