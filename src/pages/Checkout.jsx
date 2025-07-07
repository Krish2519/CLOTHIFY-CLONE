import { useStore } from "../store/useStore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
  const cart = useStore((state) => state.cart)
  const clearCart = useStore((state) => state.clearCart)
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    setSubmitted(true)
    clearCart()
    setTimeout(() => navigate("/"), 5000)
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-green-600">Order placed successfully!</h2>

      </div>
    )
  }

  return (
    <section className="py-12 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <p>{item.name} x {item.quantity}</p>
              <p>₹{item.price * item.quantity}</p>
            </div>
          ))}
          <hr />
          <div className="text-xl font-bold">Total: ₹{total}</div>
          <button
            onClick={handleCheckout}
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full"
          >
            Place Order
          </button>
        </div>
      )}
    </section>
  )
}

export default Checkout 
