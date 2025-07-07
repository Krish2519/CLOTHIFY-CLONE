import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useStore } from '../store/useStore'

const ProductDetails = () => {
  const { id } = useParams()
  const addToCart = useStore(state => state.addToCart)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://682c49c9d29df7a95be65367.mockapi.io/products122/products`)
      .then(res => setProduct(res.data.find(item => item.id === id)))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div className="text-center py-10 text-gray-500">Loading...</div>
  if (!product) return <p className="p-6 text-red-500">Product not found</p>

  return (
    <section className="py-12 px-2 sm:px-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 rounded-lg shadow-md object-cover max-h-96" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.category}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-bold text-blue-600 mb-6">₹{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
