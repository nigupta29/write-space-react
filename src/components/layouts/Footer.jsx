import CompanyLogo from '../../assets/company-logo.png'
import Container from '../utils/Container'

export default function Footer() {
  return (
    <footer className="bg-violet-500 text-gray-50">
      <Container>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center">
            <img
              src={CompanyLogo}
              alt="Company Logo"
              className="mr-2 h-12 w-12"
            />
            <span className="text-xl font-semibold">WriteSpace</span>
          </div>
          <div className="">&copy; 2023 All rights reserved</div>
        </div>
      </Container>
    </footer>
  )
}
