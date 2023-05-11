import { Link } from 'react-router-dom'
import CompanyLogo from '../../assets/company-logo.png'
import Container from '../utils/Container'

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-gray-200">
      <Container>
        <div className="flex flex-col flex-wrap items-center justify-between gap-5 md:flex-row">
          <Link to={'/'} className="flex items-center">
            <img
              src={CompanyLogo}
              alt="Company Logo"
              className="mr-2 h-12 w-12"
            />
            <span className="text-xl font-semibold">WriteSpace</span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-5 text-base">
            <Link to={'/'} className="hover:text-white">
              Home
            </Link>
            <Link to={'/blogs/archive'} className="hover:text-white">
              Archives
            </Link>
            <Link to={'/'} className="hover:text-white">
              About Us
            </Link>
            <Link to={'/'} className="hover:text-white">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center">
            <Link
              to={'/login'}
              className="mr-5 rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
            >
              Login
            </Link>
            <Link
              to={'/register'}
              className="rounded-lg bg-violet-500 px-4 py-2 text-white hover:bg-violet-400"
            >
              Register
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
