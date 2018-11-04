import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark>
          <NavbarBrand href="/" className="mr-auto">
            {this.props.siteTitle}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              {this.props.navItems.map((item, index) => (
                <NavItem key={index}>
                  <Link
                    className="nav-link"
                    // activeStyle={{ color: 'red' }}
                    activeClassName="active"
                    to={item.to}
                  >
                    {item.name}
                  </Link>
                </NavItem>
              ))}
              {/* <NavItem>
                <Link
                  className="nav-link"
                  activeStyle={{ color: 'red' }}
                  to="/"
                >
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  activeStyle={{ color: 'red' }}
                  to="/about/"
                >
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  activeStyle={{ color: 'red' }}
                  to="/services/"
                >
                  Services
                </Link>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  navItems: PropTypes.array,
}

export default Header
