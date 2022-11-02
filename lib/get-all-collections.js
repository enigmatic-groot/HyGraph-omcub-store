import hygraphClient, { gql } from '@/lib/hygraph-client'
import { CollectionFragment } from '@/lib/graphql-fragments'

export const getAllCollectionsQuery = gql`
  query AllCollectionsQuery {
    collections {
      ...CollectionFragment
    }
  }

  ${CollectionFragment}
`

async function getAllCollections() {
  const { collections } = await hygraphClient.request(getAllCollectionsQuery)

  return { collections }
}

export default getAllCollections
