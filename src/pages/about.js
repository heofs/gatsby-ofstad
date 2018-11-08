import React from 'react'
import { Button } from 'reactstrap'
import { graphql } from 'gatsby'

import Layout from '../layouts/layout'
import TextContainer from '../components/TextContainer'

const AboutPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout
      title={frontmatter.particlesTitle}
      subTitle={frontmatter.particlesSubTitle}
    >
      <TextContainer title="Hi" greyBG={true}>
        Text
      </TextContainer>
      <div
        className="index-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <h1>About Page</h1>
      <Button color="danger">Danger!</Button>
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
