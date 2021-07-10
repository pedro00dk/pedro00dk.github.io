import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import packageJson from '../package.json'

export const client = new ApolloClient({
    uri: packageJson.config.url,
    headers: { authorization: `Bearer ${packageJson.config.token}` },
    cache: new InMemoryCache(),
})

// queries

export const GQL_USER_DATA = gql`
    query {
        viewer {
            name
            avatarUrl
        }
    }
`
