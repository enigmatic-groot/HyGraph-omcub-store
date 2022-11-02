import * as React from 'react'

import getAllProducts from '@/lib/get-all-products'
import getProductBySlug from '@/lib/get-product-slug'
import getPageData from '@/lib/get-page-data'
import ProductPageUI from '@/components/product-page-ui'
import SEO from '@/components/seo'
import Layout from '@/components/Layout'

function ProductPage({ product }) {
  return (
    <Layout>
      <SEO title={product.name} {...product} />
      <ProductPageUI product={product} />
    </Layout>
  )
}

export async function getStaticPaths({ locales }) {
  let paths = []

  for (const locale of locales) {
    const { products } = await getAllProducts({ locale })

    paths = [
      ...paths,
      ...products.map((product) => ({
        params: { slug: product.slug },
        locale
      }))
    ]
  }

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ locale, params }) {
  const pageData = await getPageData({ locale })
  const { product } = await getProductBySlug({
    locale,
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
