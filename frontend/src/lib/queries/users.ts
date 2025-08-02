import { graphql } from '@/gql'

export const GET_USERS = graphql(`
  query GetUsers {
    users {
      id
      name
      email
      biography
      iconUrl
      createdAt
      updatedAt
    }
  }
`)