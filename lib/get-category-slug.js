import hygraphClient, { gql } from '@/lib/hygraph-client'
import { CategoryFragment, ProductCardFragment } from '@/lib/graphql-fragments'

export const getCategorySlugQuery = gql`
  query CategorySlugQuery($slug: String!) {
    categories(where: { slug: $slug }) {
      ...CategoryFragment
      products {
        ...ProductCardFragment
      }
    }
  }

  ${[CategoryFragment, ProductCardFragment]}
`

async function getCategoryBySlug({ slug }) {
  const {
    categories: [category]
  } = await hygraphClient.request(getCategorySlugQuery, {
    slug
  })

  return {
    category
  }
}

export default getCategoryBySlug
