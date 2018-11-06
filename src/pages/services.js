import React from 'react'
// import { Link } from 'gatsby'
// import Img from 'gatsby-image'
import WebsiteImage from '../images/svg/browser.svg'

import Layout from '../layouts/layout'

const ServicesPage = () => (
  <Layout>
    <div
      className="container-fluid product-container product-bg-grey justify-content-center px-0"
      id="websites"
    >
      <div className="row col-xs-12 col-xl-10 product-row py-5 mx-auto justify-content-center">
        <div className="col-xs-12 col-md- text-center product-image-container product-col">
          <img
            className="product-main-image"
            style={{ height: '12rem' }}
            src={WebsiteImage}
            alt="website illustration"
          />
        </div>
        <div className="col-xs-12 col-md-8 px-0 px-md-4 product-col align-self-start">
          <div className="product-text">
            <h1>Websites</h1>
            <p>
              Responsive websites for your business or project that scales well
              with any device.
            </p>
            <p>Optimized for search engine ranking and speed.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ServicesPage
