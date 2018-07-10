import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Logo} from '../Imgs/logoWemind.png';
import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
	<div>
		<Helmet
			title={data.site.siteMetadata.title}
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
			]}
		/>


		<Navbar collapseOnSelect>
			<Navbar.Header>
				<Navbar.Brand>
					<Image src= {Logo} />
					<a href="#brand">React-Bootstrap</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav>
					<NavItem eventKey={1} href="#">
						Link
      			</NavItem>
					<NavItem eventKey={2} href="#">
						Link
      			</NavItem>
					<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
						<MenuItem eventKey={3.1}>Action</MenuItem>
						<MenuItem eventKey={3.2}>Another action</MenuItem>
						<MenuItem eventKey={3.3}>Something else here</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={3.3}>Separated link</MenuItem>
					</NavDropdown>
				</Nav>
				<Nav pullRight>
					<NavItem eventKey={1} href="#">
						Link Right
      			</NavItem>
					<NavItem eventKey={2} href="#">
						Link Right
      			</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>



		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '0px 1.0875rem 1.45rem',
				paddingTop: 0,
			}}
		>
			{children()}
		</div>
	</div>
)

Layout.propTypes = {
	children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
