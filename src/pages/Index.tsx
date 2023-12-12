import { RouteDefinition, Router, RouteSectionProps } from '@solidjs/router'
import { render } from 'solid-js/web'
import { githubActions } from '../stores/github'
import { router as appRouter } from './App'

export const router = () => ({ load, component: Index, children: appRouter() } as RouteDefinition)

export const load = () => githubActions.fetchRepos()

export const Index = (props: RouteSectionProps) => <div>{props.children}</div>

render(() => <Router>{[router() as any]}</Router>, document.body)
