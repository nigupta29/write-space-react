import BlogList from '../components/blogs/BlogList'
import Container from '../components/utils/Container'

export default function Home() {
  return (
    <section className="">
      <Container>
        <h1 className="mb-5 text-4xl font-bold">Latest Blogs</h1>
        <BlogList />
      </Container>
    </section>
  )
}
