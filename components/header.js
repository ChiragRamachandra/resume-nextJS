import React, { Fragment } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const header = () => {
	return (
		<Fragment>
			<Navbar className="color-nav padding-left " expand="lg">
				<Navbar.Brand href="#home">
					<img
						alt=""
						src="../static/logo/logo.png"
						width="300"
						height="60"
						className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto padding-right">
						<Nav.Link className="padding-right colorBlack" href="#home">
							HOME
						</Nav.Link>
						<Nav.Link className="padding-right colorBlack" href="#link">
							ABOUT
						</Nav.Link>
						<Nav.Link className="padding-right colorBlack" href="#link">
							WORK
						</Nav.Link>
						<Nav.Link className="padding-right colorBlack" href="#link">
							BLOG
						</Nav.Link>
						<Nav.Link className="padding-right colorBlack" href="#link">
							GET IN TOUCH
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
};

export default header;
