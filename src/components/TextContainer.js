import React from 'react'
import PropTypes from 'prop-types'

const TextContainer = ({ title, children, greyBG }) => {
  return (
    <div
      className="container-fluid border-bottom py-4"
      style={
        greyBG === true
          ? { backgroundColor: '#f6f6f6' }
          : { backgroundColor: '#fff' }
      }
    >
      <h2 className="container-text-heading">{title}</h2>
      <p className="m-0">{children}</p>
    </div>
  )
}

TextContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
}

export default TextContainer
