import { blogs } from '../../data'
import BlogItem from './BlogItem'

export default function BlogList() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map(blog => (
        <BlogItem key={blog.id} {...blog} />
      ))}
    </div>
  )
}
