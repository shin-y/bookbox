'use client'

import { gql, useQuery } from '@apollo/client'

const TEST_QUERY = gql`
  query Test {
    __typename
  }
`

export default function UsersPage() {
  const { loading, error } = useQuery(TEST_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return <div>Success!</div>
}