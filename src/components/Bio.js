import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  margin: 2em 0;
`

const imageSize = 70
const StyledImage = styled(Image)`
  max-height: ${imageSize}px;
  max-width: ${imageSize}px;
  min-height: ${imageSize}px;
  min-width: ${imageSize}px;
  border-radius: 50%;
  margin-right: 2em;
`

const Bio = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Wrapper>
            <StyledImage
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
            />
            <p>
              Written by <strong>{author}</strong> who lives and works in the
              United Kingdom building useful things.
              {` `}
              <a href={`https://github.com/${social.github}`}>
                You can see my work on GitHub.
              </a>
            </p>
          </Wrapper>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-picture.jpg/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          github
        }
      }
    }
  }
`

export default Bio
