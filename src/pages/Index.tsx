import { Route, Router } from '@solidjs/router'
import { createResource } from 'solid-js'
import { render } from 'solid-js/web'
import { github$Actions } from '../stores/github'

export const IndexRouter = () => <Route path='/' load={indexLoader} component={Index}></Route>

export const indexLoader = () => ({ index: { repositories: createResource(github$Actions.fetchRepositories) } })

export const Index = () => <div>hello world!</div>

render(() => <Router>{<IndexRouter />}</Router>, document.body)
