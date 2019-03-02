import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/layout'

// import TextContainer from '../components/TextContainer'
import TextImageContainer from '../components/TextImageContainer'

import SensorImage from '../images/svg/bio-sensor.svg'
import AnalyticsImage from '../images/svg/analytics.svg'
import CloudImage from '../images/svg/cloud.svg'

const ServicesPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout title={frontmatter.particlesTitle}>
      <TextImageContainer
        title={frontmatter.firstContainerTitle}
        image={SensorImage}
        imageLeft={true}
        greyBG={true}
      >
        {frontmatter.firstContainerText}
      </TextImageContainer>
      <TextImageContainer
        title={frontmatter.secondContainerTitle}
        image={AnalyticsImage}
        imageLeft={false}
        greyBG={false}
      >
        {frontmatter.secondContainerText}
      </TextImageContainer>
      <TextImageContainer
        title={frontmatter.thirdContainerTitle}
        image={CloudImage}
        imageLeft={true}
        greyBG={true}
      >
        {frontmatter.thirdContainerText}
      </TextImageContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ServicesPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "services-page" } }) {
      frontmatter {
        particlesTitle
        particlesSubTitle
        firstContainerTitle
        firstContainerText
        secondContainerTitle
        secondContainerText
        thirdContainerTitle
        thirdContainerText
      }
    }
  }
`

export default ServicesPage
