import getAllProducts from '@/lib/get-all-products'
import getPageData from '@/lib/get-page-data'
import ProductGrid from '@/components/product-grid'
import Hero from '@/components/Hero'
import imgHero from '../images/hero-home.jpg'
import Layout from '@/components/Layout'

function IndexPage({ products }) {
  return (
    <Layout>
      <Hero imgSrc={imgHero} />
      <ProductGrid products={products} />
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  const pageData = await getPageData({ locale })
  const { products } = await getAllProducts({ locale })

  return {
    props: { ...pageData, products }
  }
}

export default IndexPage
