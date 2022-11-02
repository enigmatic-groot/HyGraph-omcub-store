import hygraphClient, { gql } from '@/lib/hygraph-client'
import { ProductCardFragment } from '@/lib/graphql-fragments'

export const getAllProductsQuery = gql`
  query AllProductsQuery {
    products {
      ...ProductCardFragment
    }
  }

  ${ProductCardFragment}
`

async function getAllProducts() {
  const { products } = await hygraphClient.request(getAllProductsQuery)

  return {
    products
  }
}

export default getAllProducts
