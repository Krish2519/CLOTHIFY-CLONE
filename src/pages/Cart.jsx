import { useStore } from '../store/useStore'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cart = useStore(state => state.cart)
  const removeFromCart = useStore(state => state.removeFromCart)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. 
        <Link to="/shop" className="text-blue-600 underline"> <br />SHOP MORE <br /> </Link></p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white shadow p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                  <p className="text-blue-600 font-bold">₹{item.price * item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 font-semibold hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right text-xl font-semibold">
            Total: ₹{total}
          </div>
        </div>
      )}
      <div className="mt-6">
        <Link to="/checkout" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50" aria-disabled={cart.length === 0}>
          Proceed to Checkout
        </Link>
      </div>
    </section>
  )
}

export default Cart
