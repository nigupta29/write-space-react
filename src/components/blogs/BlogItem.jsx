import PropTypes from 'prop-types'

function formatPostingTime(postingTime) {
  const options = { weekday: 'long', month: 'short', day: 'numeric' }
  return postingTime.toLocaleDateString(undefined, options)
}

export default function BlogItem({
  title,
  subtitle,
  tag,
  image,
  authorName,
  authorPhoto,
  postingTime,
}) {
  return (
    <article className="bg-white shadow-md hover:drop-shadow-lg">
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="flex min-h-[250px] flex-col p-5">
        <div className="space-y-2">
          <span className="font-medium text-violet-500">{tag}</span>
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <h3 className="text-lg text-gray-600">{subtitle}</h3>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={authorPhoto}
              alt={authorName}
              className="mr-2 h-8 w-8 rounded-full object-cover"
            />
            <span className="font-medium text-gray-700">{authorName}</span>
          </div>
          <div className="text-sm text-gray-500">
            {formatPostingTime(new Date(postingTime))}
          </div>
        </div>
      </div>
    </article>
  )
}

BlogItem.propTypes = {
  title: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorPhoto: PropTypes.string.isRequired,
  postingTime: PropTypes.string.isRequired,
}
