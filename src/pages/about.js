import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/layout'

const AboutPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout
      title={frontmatter.particlesTitle}
      subTitle={frontmatter.particlesSubTitle}
    >
      <div
        className="index-content m-0 py-4 px-2 border"
        style={{ backgroundColor: '#f6f6f6' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        particlesTitle
        particlesSubTitle
      }
    }
  }
`

export default AboutPage
