import * as React from 'react'

import getAllProducts from '@/lib/get-all-products'
import getProductBySlug from '@/lib/get-product-slug'
import getPageData from '@/lib/get-page-data'
import ProductPageUI from '@/components/product-page-ui'
import SEO from '@/components/seo'
import Container from '@/components/Container'
import Section from '@/components/Section'

function ProductPage({ product }) {
  return (
    <>
      <SEO title={product.name} {...product} />
      <Section>
        <Container>
          <ProductPageUI product={product} />
        </Container>
      </Section>
    </>
  )
}

export async function getStaticPaths() {
  let paths = []

  const { products } = await getAllProducts()

  paths = [
    ...paths,
    ...products.map((product) => ({
      params: { slug: product.slug }
    }))
  ]

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const pageData = await getPageData()
  const { product } = await getProductBySlug({
    slug: params.slug
  })

  return {
    props: {
      product,
      ...pageData
    }
  }
}

export default ProductPage
