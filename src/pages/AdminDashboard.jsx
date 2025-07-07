import { useEffect, useState } from "react"
import axios from "axios"

const AdminDashboard = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://682c49c9d29df7a95be65367.mockapi.io/products122/products")
      .then((res) => setProducts(res.data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-12 px-2 sm:px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div className="bg-blue-100 p-4 sm:p-6 rounded-lg text-center">
          <h3 className="text-lg sm:text-xl font-bold">Total Products</h3>
          <p className="text-2xl sm:text-3xl">{products.length}</p>
        </div>
        <div className="bg-green-100 p-4 sm:p-6 rounded-lg text-center">
          <h3 className="text-lg sm:text-xl font-bold">Orders</h3>
          <p className="text-2xl sm:text-3xl">123</p>
        </div>
        <div className="bg-yellow-100 p-4 sm:p-6 rounded-lg text-center">
          <h3 className="text-lg sm:text-xl font-bold">Users</h3>
          <p className="text-2xl sm:text-3xl">45</p>
        </div>
        <div className="bg-red-100 p-4 sm:p-6 rounded-lg text-center">
          <h3 className="text-lg sm:text-xl font-bold">Revenue</h3>
          <p className="text-2xl sm:text-3xl">₹1.2L</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-4">Product Inventory</h3>
      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading products...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-2 sm:px-4 py-2">ID</th>
                <th className="border px-2 sm:px-4 py-2">Name</th>
                <th className="border px-2 sm:px-4 py-2">Category</th>
                <th className="border px-2 sm:px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td className="border px-2 sm:px-4 py-2">{p.id}</td>
                  <td className="border px-2 sm:px-4 py-2">{p.name}</td>
                  <td className="border px-2 sm:px-4 py-2">{p.category}</td>
                  <td className="border px-2 sm:px-4 py-2">₹{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default AdminDashboard
