import { Link } from "react-router-dom"
import { useStore } from "../store/useStore"

const ProductCard = ({ product }) => {
  const addToCart = useStore(state => state.addToCart)
  const addToWishlist = useStore((state) => state.addToWishlist)

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold hover:underline">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="mt-2 text-blue-600 font-bold">₹{product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
        
      </div>
    </div>
  )
}
export default ProductCard