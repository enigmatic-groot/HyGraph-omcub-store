import hygraphClient, { gql } from '@/lib/hygraph-client'
import { ProductFragment } from '@/lib/graphql-fragments'

export const getProductsSlugQuery = gql`
  query CollectionSlugQuery($slug: String!) {
    products(where: { slug: $slug }) {
      ...ProductFragment
      localizations(includeCurrent: true) {
        name
        slug
      }
    }
  }

  ${ProductFragment}
`

async function getProductBySlug({ slug }) {
  const {
    products: [product]
  } = await hygraphClient.request(getProductsSlugQuery, {
    slug
  })

  return { product }
}

export default getProductBySlug
