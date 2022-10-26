import ProductCard from '@/components/product-card'
import Section from '@/components/Section'
import Container from '@/components/Container'

function ProductGrid({ products }) {
  return (
    <Section>
      <Container>
        <div className="gap-8 grid tablet:grid-cols-2 laptop:grid-cols-3">
          {products.map(ProductCard)}
        </div>
      </Container>
    </Section>
  )
}

export default ProductGrid
