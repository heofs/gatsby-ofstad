import React from 'react'
import PropTypes from 'prop-types'

const TextContainer = ({ title, children, greyBG }) => {
  const maxWidth = '800px'
  return (
    <div
      className="container-fluid border-bottom p-4"
      style={
        greyBG === true
          ? { backgroundColor: '#f6f6f6' }
          : { backgroundColor: '#fff' }
      }
    >
      <div
        className="row justify-content-center mx-auto px-1"
        style={{
          maxWidth: maxWidth,
        }}
      >
        <h2 className="container-text-heading"> {title} </h2>
      </div>
      <div
        className="row justify-content-center mx-auto px-1"
        style={{
          maxWidth: maxWidth,
        }}
      >
        <p className="m-0" style={{ textAlign: 'center' }}>
          {children}
        </p>
      </div>
    </div>
  )
}

TextContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
}

export default TextContainer
