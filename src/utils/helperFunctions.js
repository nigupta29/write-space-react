export const formatPostingTime = postingTime => {
  const currTime = new Date(postingTime)
  const options = { weekday: 'long', month: 'short', day: 'numeric' }
  return currTime.toLocaleDateString(undefined, options)
}
