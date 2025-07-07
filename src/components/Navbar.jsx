import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black-600">Clothify</Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/shop" className="hover:text-blue-600">Shop</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
    
          {/* <Link to="/admin" className="hover:text-blue-600">Admin</Link> */}
          
          <Link to="/cart" className="hover:text-blue-600 flex items-center" aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  )
}


export default Navbar
