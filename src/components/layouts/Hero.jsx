import { Link } from 'react-router-dom'
import heroImage from '../../assets/hero-image.jpg'

const Hero = () => {
  return (
    <section
      className="mb-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="flex flex-col items-center py-40 text-center">
        <h1 className="mb-6 text-5xl font-bold leading-tight text-white">
          Discover New Horizons
        </h1>
        <p className="mb-8 text-xl leading-tight text-white">
          Dive into our collection of the latest and greatest articles on
          various topics.
        </p>
        <Link
          to={`/blogs/archive`}
          className="rounded-full bg-white px-6 py-2 font-semibold text-indigo-600 shadow-lg transition duration-300 ease-in-out hover:bg-indigo-600 hover:text-white"
        >
          Read More
        </Link>
      </div>
    </section>
  )
}

export default Hero
