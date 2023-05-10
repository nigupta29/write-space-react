import CompanyLogo from '../../assets/company-logo.png'
import Container from '../utils/Container'

export default function Footer() {
  return (
    <footer className="bg-violet-500 text-gray-50">
      <Container>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <img
            src={CompanyLogo}
            alt="Company Logo"
            className="mb-4 h-12 md:mb-0"
          />
          <div className="">&copy; 2023 WriteSpace</div>
        </div>
      </Container>
    </footer>
  )
}
