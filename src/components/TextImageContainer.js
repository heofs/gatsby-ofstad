import React from 'react'
import PropTypes from 'prop-types'

const TextImageContainer = ({ title, children, image, imageLeft, greyBG }) => {
  const imageClassNames = () => {
    if (imageLeft === true) {
      return 'col-xs-12 col-md- text-center product-image-container'
    } else {
      return 'col-xs-12 col-md- order-md-3 text-center product-image-container'
    }
  }
  const textClassNames = () => {
    if (imageLeft === true) {
      return 'col-xs-12 col-md-8 px-0 px-md-4 product-col align-self-start'
    } else {
      return 'col-xs-12 col-md-8 px-0 px-md-4 order-md-2 product-col align-self-start'
    }
  }
  return (
    <div
      className="container-fluid product-container justify-content-center px-0 border-bottom"
      style={
        greyBG === true
          ? { backgroundColor: '#f6f6f6' }
          : { backgroundColor: '#fff' }
      }
    >
      <div className="row col-xs-12 col-xl-10 product-row py-4 mx-auto justify-content-center">
        <div className={imageClassNames()}>
          <img
            className="product-main-image"
            style={{ height: '12rem' }}
            src={image}
            alt="website illustration"
          />
        </div>

        <div className={textClassNames()}>
          <div className="product-text">
            <h1>{title}</h1>
            <p>{children}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

TextImageContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string,
  image: PropTypes.string,
  imageLeft: PropTypes.bool,
  greyBG: PropTypes.bool,
}

export default TextImageContainer
