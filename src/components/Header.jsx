import React, { useState } from "react";
import { Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
            <Navbar.Brand as={Link} to="/" onClick={handleLinkClick}>
              Logo
            </Navbar.Brand>
            <Button
              variant="dark"
              className="d-block d-lg-none"
              onClick={handleNavbarToggle}
            >
              Menu
            </Button>
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" onClick={handleLinkClick}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" onClick={handleLinkClick}>
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Offcanvas show={expanded} onHide={() => setExpanded(false)}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Nav.Link as={Link} to="/" onClick={handleLinkClick}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" onClick={handleLinkClick}>
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  );
}
