import PropTypes from 'prop-types'
function Container({ children }) {
  return <div className="mx-auto max-w-7xl p-5">{children}</div>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
