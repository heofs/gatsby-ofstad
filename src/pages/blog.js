import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layouts/layout'
import styled from 'styled-components'
import theme from '../constants/theme'
import Bio from '../components/Bio'
// import TextContainer from '../components/TextContainer'

const BlogList = styled.div`
  max-width: ${theme.contentWidth}px;
  margin: 0 auto;
  /* margin-top: 3em; */
  text-align: left;
  padding: 0 1.5em;
`

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout title="Blog">
        <BlogList>
          <Bio />
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </BlogList>
      </Layout>
    )
  }
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
