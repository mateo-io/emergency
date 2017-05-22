import React from 'react'
import PropTypes from 'prop-types'

const style = {
        padding: '20px',
        textDecoration: 'none',
        fontSize: '18px'
    }

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span style={style}>{children}</span>
  }

  return (
    <a href="#"
      style={style}
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
