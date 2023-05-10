import { Link } from 'react-router-dom'
import Container from '../utils/Container'

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-gray-200">
      <Container>
        <div className="flex flex-col flex-wrap items-center md:flex-row">
          <Link to={'/'} className="mb-4 flex items-center md:mb-0">
            <img src="logo.png" alt="Company Logo" className="mr-2 h-12 w-12" />
            <span className="text-xl font-semibold">WriteSpace</span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            <Link to={'/'} className="mr-5 hover:text-white">
              Home
            </Link>
            <Link to={'/blogs/archive'} className="mr-5 hover:text-white">
              Archives
            </Link>
            <Link to={'/'} className="mr-5 hover:text-white">
              About Us
            </Link>
            <Link to={'/'} className="mr-5 hover:text-white">
              Contact Us
            </Link>
          </nav>

          <div className="mt-4 flex items-center md:ml-auto md:mt-0">
            <Link
              to={'/login'}
              className="mr-5 rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
            >
              Login
            </Link>
            <Link
              to={'/register'}
              className="rounded-lg bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-400"
            >
              Register
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
