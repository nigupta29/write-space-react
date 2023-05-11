import BlogList from '../components/blogs/BlogList'
import Container from '../components/utils/Container'

export default function Archive() {
  return (
    <section className="mt-10">
      <Container>
        <hgroup className="mb-10">
          <h1 className="mb-5 text-4xl font-bold">Archives</h1>
          <p className="text-xl text-gray-800">
            Read each of our blogs that we have published so far.
          </p>
        </hgroup>
        <BlogList />
      </Container>
    </section>
  )
}
