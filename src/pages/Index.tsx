import { RouteDefinition, Router, RouteSectionProps } from '@solidjs/router'
import { createResource } from 'solid-js'
import { render } from 'solid-js/web'
import { github$Actions } from '../stores/github'
import { appRouter } from './App'

export const indexRouter = () =>
    ({
        load: indexLoader,
        component: Index,
        children: [appRouter()],
    }) as RouteDefinition

export const indexLoader = () => ({ index: { repositories: createResource(github$Actions.fetchRepositories) } })

export const Index = (props: RouteSectionProps) => <div>{props.children}</div>

render(() => <Router>{[indexRouter() as any]}</Router>, document.body)
