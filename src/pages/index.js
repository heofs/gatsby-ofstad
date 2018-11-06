import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../layouts/layout'

import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Welcome to my website</h1>
    <p>{data.site.siteMetadata.description}</p>
    <p>Now go build something great.</p>
  </Layout>
)

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default IndexPage
