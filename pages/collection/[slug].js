import * as React from 'react'

import getAllCollections from '@/lib/get-all-collections'
import getCollectionBySlug from '@/lib/get-collection-slug'
import getPageData from '@/lib/get-page-data'
import ProductGrid from '@/components/product-grid'
import SEO from '@/components/seo'
import Hero from '@/components/Hero'
import HeroCards from '@/components/HeroCards'

function CollectionPage({ collection }) {
  const { hero, heroCards } = collection

  return (
    <>
      <SEO title={collection.name} {...collection} />
      <Hero imgSrc={hero.image.url} />
      <HeroCards hero_cards={heroCards} />
      <ProductGrid products={collection.products} />
    </>
  )
}

export async function getStaticPaths() {
  let paths = []

  const { collections } = await getAllCollections()

  paths = [
    ...paths,
    ...collections.map((collection) => ({
      params: { slug: collection.slug }
    }))
  ]

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const pageData = await getPageData()
  const { collection } = await getCollectionBySlug({
    slug: params.slug
  })

  return {
    props: {
      collection,
      ...pageData
    }
  }
}

export default CollectionPage
