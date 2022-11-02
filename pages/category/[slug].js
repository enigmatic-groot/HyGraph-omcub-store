import * as React from 'react'

import getAllCategories from '@/lib/get-all-categories'
import getCategoryBySlug from '@/lib/get-category-slug'
import getPageData from '@/lib/get-page-data'
import ProductGrid from '@/components/product-grid'
import SEO from '@/components/seo'
import Hero from '@/components/Hero'
import HeroCards from '@/components/HeroCards'

function CategoryPage({ category }) {
  const { hero, heroCards } = category

  return (
    <>
      <SEO title={category.name} {...category} />
      <Hero imgSrc={hero.image.url} />
      <HeroCards hero_cards={heroCards} />
      <ProductGrid products={category.products} />
    </>
  )
}

export async function getStaticPaths() {
  let paths = []

  const { categories } = await getAllCategories()

  paths = [
    ...paths,
    ...categories.map((category) => ({
      params: { slug: category.slug }
    }))
  ]

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const pageData = await getPageData()
  const { category } = await getCategoryBySlug({
    slug: params.slug
  })

  return {
    props: {
      category,
      ...pageData
    }
  }
}

export default CategoryPage
