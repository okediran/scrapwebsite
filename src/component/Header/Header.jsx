import React from 'react';
// logo
import logo from "../../asses/image/scrap-logo@3x-1580x2048.png";
// bootstrap
import { Navbar, Nav } from 'react-bootstrap';
function Header() {
    return (
        <section id='header'>
            
            {/* ROUTE */}
            <Navbar expand="lg">
                <img style={{ width: "50px" }} src={logo} alt="" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link className='a' href="#features">About</Nav.Link>
                        <Nav.Link className='a' href="#pricing">Gallery</Nav.Link>
                        <Nav.Link className='a' href="#pricing">Art Collection</Nav.Link>
                        <Nav.Link className='a' href="#pricing">Team</Nav.Link>
                        <Nav.Link className='a' href="#pricing">Project</Nav.Link>
                        <Nav.Link className='a' href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </section>
    );
}

export default Header;