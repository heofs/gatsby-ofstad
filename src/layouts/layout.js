import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'

import './reduction.scss'
import Particles from 'react-particles-js'

const navItems = [
  //   { to: '/', name: 'Home' },
  { to: '/about', name: 'About Us' },
  { to: '/services', name: 'Services' },
]

const particlesConfig = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#3CA9D1',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: '#ffffff',
      opacity: 0.4,
      width: 0.8,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0,
      },
    },
  },
  retina_detect: true,
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} navItems={navItems} />
        <Particles
          params={particlesConfig}
          style={{
            width: '100%',
            backgroundColor: `rgb(49, 49, 49)`,
          }}
          height={'18rem'}
        />
        <div className={'container-fluid text-center particles-text'}>
          <h1 className="header-text mb-1">Software and Services</h1>
        </div>

        <div
          style={{
            margin: '0 auto',
            maxWidth: 1100,
            padding: '0px',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        {/* <footer>Footer</footer> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
