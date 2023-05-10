import Container from '../utils/Container'

export default function Newsletter() {
  return (
    <section className="mt-10 bg-gray-100 py-10">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Subscribe to our Newsletter
          </h2>
          <p className="mt-2.5 text-lg text-gray-600">
            Stay up to date with our latest articles and news.
          </p>
        </div>
        <form className="mt-10 sm:flex sm:justify-center">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-500 shadow-sm outline-none focus:border-transparent focus:ring-2 focus:ring-violet-500 sm:max-w-xs"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-violet-500 px-5 py-3 text-base font-medium text-white hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:flex-shrink-0"
          >
            Subscribe
          </button>
        </form>
      </Container>
    </section>
  )
}
