import hygraphClient, { gql } from '@/lib/hygraph-client'
import {
  CollectionFragment,
  ProductCardFragment
} from '@/lib/graphql-fragments'

export const getCollectionSlugQuery = gql`
  query CollectionSlugQuery($slug: String!) {
    collections(where: { slug: $slug }) {
      ...CollectionFragment
      products {
        ...ProductCardFragment
      }
    }
  }

  ${[CollectionFragment, ProductCardFragment]}
`

async function getCollectionBySlug({ slug }) {
  const {
    collections: [collection]
  } = await hygraphClient.request(getCollectionSlugQuery, {
    slug
  })

  return {
    collection
  }
}

export default getCollectionBySlug
