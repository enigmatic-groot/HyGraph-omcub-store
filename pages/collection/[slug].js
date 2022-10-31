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

export async function getStaticPaths({ locales }) {
  let paths = []

  for (const locale of locales) {
    const { collections } = await getAllCollections({ locale })

    paths = [
      ...paths,
      ...collections.map((collection) => ({
        params: { slug: collection.slug },
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
  const { collection } = await getCollectionBySlug({
    locale,
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
