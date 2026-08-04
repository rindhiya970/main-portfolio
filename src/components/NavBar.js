import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" className="custom-navbar" expand="md">
        <Container>
          <Navbar.Brand href="#intro" className="nav-brand-title">
            Rindhiya
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-links-left">
              <Nav.Link href="#intro">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <Nav className="ml-auto nav-icons-right">
              <Nav.Link href="mailto:rindhiya365@gmail.com" title="Email">
                <EmailRoundedIcon
                  className="nav-icon"
                  style={{ fontSize: 24 }}
                ></EmailRoundedIcon>
              </Nav.Link>
              <Nav.Link
                href="https://github.com/rindhiya970"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <GitHubIcon
                  className="nav-icon"
                  style={{ fontSize: 23 }}
                ></GitHubIcon>
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/rindhiya-a-0b05722a5"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <LinkedInIcon
                  className="nav-icon"
                  style={{ fontSize: 25 }}
                ></LinkedInIcon>
              </Nav.Link>
              <Nav.Link
                href="https://medium.com/@rindhiya365"
                target="_blank"
                rel="noopener noreferrer"
                title="Medium"
              >
                <BorderColorIcon
                  className="nav-icon"
                  style={{ fontSize: 23 }}
                ></BorderColorIcon>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
