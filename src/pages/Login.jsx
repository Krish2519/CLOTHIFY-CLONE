import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    console.log('Login data:', data)
    reset()
  }

  return (
    <section className="py-12 px-4 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("email")} type="email" className="w-full p-3 border rounded" placeholder="Email" required />
        <input {...register("password")} type="password" className="w-full p-3 border rounded" placeholder="Password" required />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded w-full hover:bg-blue-700">
          Log In
        </button>
      </form>
    </section>
  )
}

export default Login
