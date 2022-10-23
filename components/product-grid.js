import ProductCard from '@/components/product-card'

function ProductGrid({ products }) {
  return (
    <div className="gap-8 grid tablet:grid-cols-2 laptop:grid-cols-3">
      {products.map(ProductCard)}
    </div>
  )
}

export default ProductGrid
