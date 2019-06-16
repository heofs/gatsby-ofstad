import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/layout'

import TextContainer from '../components/TextContainer'
import TextImageContainer from '../components/TextImageContainer'

import ScienceImage from '../images/svg/science.svg'
import ServerImage from '../images/svg/server.svg'

const IndexPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout
      title={frontmatter.particlesTitle}
      subTitle={frontmatter.particlesSubTitle}
    >
      <TextContainer title={frontmatter.textContainerTitle} greyBG={true}>
        {frontmatter.textContainerText}
      </TextContainer>
      <TextImageContainer
        title={frontmatter.firstContainerTitle}
        image={ScienceImage}
        imageLeft={false}
        greyBG={false}
        spinningImage={false}
      >
        {frontmatter.firstContainerText}
      </TextImageContainer>
      <TextImageContainer
        title={frontmatter.secondContainerTitle}
        image={ServerImage}
        imageLeft={true}
        greyBG={true}
      >
        {frontmatter.secondContainerText}
      </TextImageContainer>
    </Layout>
  )
}
export const pageQuery = graphql`
  query IndexPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        particlesTitle
        particlesSubTitle
        textContainerTitle
        textContainerText
        firstContainerTitle
        firstContainerText
        secondContainerTitle
        secondContainerText
      }
    }
  }
`

export default IndexPage
