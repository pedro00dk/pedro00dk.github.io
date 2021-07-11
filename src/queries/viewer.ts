import { gql } from '@apollo/client'

export const GQL_USER_DATA = gql`
    query UserData {
        viewer {
            name
            avatarUrl
        }
    }
`
