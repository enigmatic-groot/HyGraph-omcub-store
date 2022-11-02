import hygraphClient, { gql } from '@/lib/hygraph-client'
import { CategoryFragment } from '@/lib/graphql-fragments'

export const getAllCategoriesQuery = gql`
  query AllCategoriesQuery {
    categories {
      ...CategoryFragment
    }
  }

  ${CategoryFragment}
`

async function getAllCategories() {
  const { categories } = await hygraphClient.request(getAllCategoriesQuery)

  return { categories }
}

export default getAllCategories
