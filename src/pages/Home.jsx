import BlogList from '../components/blogs/BlogList'
import Container from '../components/utils/Container'

export default function Home() {
  return (
    <section className="">
      <Container>
        <hgroup className="mb-10">
          <h1 className="mb-5 text-4xl font-bold">Latest Blogs</h1>
          <p className="text-xl text-gray-800">
            Get the latest scoop from our writers.
          </p>
        </hgroup>
        <BlogList />
      </Container>
    </section>
  )
}
