import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section>
      <h1 className='text-5xl font-bold'>Not Found</h1>
      <Link to={"/"}>Back to Home</Link>
    </section>
  )
}
