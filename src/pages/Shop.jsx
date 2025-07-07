import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

const Shop = () => {
  const [productsData, setProductsData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://682c49c9d29df7a95be65367.mockapi.io/products122/products')
      .then(res => setProductsData(res.data))
      .catch(err => console.error('Failed to fetch products:', err))
      .finally(() => setLoading(false))
  }, [])

  const categories = ['All', ...new Set(productsData.map(p => p.category))]

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter(p => p.category === selectedCategory)

  return (
    <section className="py-12 px-2 sm:px-4 max-w-7xl mx-auto">
      {/* <h2 className="text-3xl font-bold mb-4 text-center">Shop Our Collection</h2> */}

      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading products...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Shop
