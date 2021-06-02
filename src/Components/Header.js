import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <Navbar variant='dark' bg="dark" expand="sm" className='px-4' >
            <LinkContainer to='/'>
                <Navbar.Brand>Apurva Singh</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href='/#about'><i className="fas fa-user" style={{ color: '#f9952d' }}></i> About Me</Nav.Link>
                    <Nav.Link href='/#projects'><i className="fas fa-laptop-code" style={{ color: '#f9952d' }}></i>Projects</Nav.Link>
                    <LinkContainer to='/resume'>
                        <Nav.Link><i className="fas fa-file-word" style={{ color: '#f9952d' }}></i>Resume</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
