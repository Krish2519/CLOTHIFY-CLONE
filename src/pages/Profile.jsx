import { useStore } from "../store/useStore"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const user = useStore(state => state.user)
  const logout = useStore(state => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <section className="py-12 px-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Your Profile</h2>
      {user ? (
        <div className="bg-white p-6 rounded shadow">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button
            onClick={handleLogout}
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <p className="text-gray-600">You’re not logged in. Please <a href="/login" className="text-blue-600 underline">log in</a>.</p>
      )}
    </section>
  )
}

export default Profile
