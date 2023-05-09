import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h1 className="text-5xl font-bold">Not Found</h1>
      <Link to={'/'} className="flex w-fit items-center gap-2 bg-gray-100 p-3">
        Back to Home <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </section>
  )
}
