import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icon_2.webp";
import navIcon3 from "../assets/img/icon_33.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Router>
        <Navbar
          expand="md"
          className={scrolled ? "scrolled" : ""}
          expanded={expanded}
        >
          <Container>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  href="#home"
                  className={
                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => {
                    handleToggle();
                    onUpdateActiveLink("home");
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#summary"
                  className={
                    activeLink === "summary"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => {
                    handleToggle();
                    onUpdateActiveLink("summary");
                  }}
                >
                  Resume
                </Nav.Link>
                <Nav.Link
                  href="#skills"
                  className={
                    activeLink === "skills"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => {
                    handleToggle();
                    onUpdateActiveLink("skills");
                  }}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  href="#projects"
                  className={
                    activeLink === "projects"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => {
                    handleToggle();
                    onUpdateActiveLink("projects");
                  }}
                >
                  Projects
                </Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a
                    href="https://www.linkedin.com/in/rahul-singh-jadon-157005161/"
                    onClick={handleToggle}
                  >
                    <img src={navIcon1} alt="LinkedIn URL" />
                  </a>
                  <a href="https://github.com/rsjmanit" onClick={handleToggle}>
                    <img
                      src={navIcon2}
                      alt="GitHub URL"
                      className="social-icon-git"
                    />
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rahul.jadon74096@gmail.com"
                    target="_blank"
                    onClick={handleToggle}
                  >
                    <img
                      src={navIcon3}
                      alt="Email Me"
                      className="social-icon-git"
                    />
                  </a>
                </div>
                <HashLink to="#connect">
                  <button className="vvd" onClick={handleToggle}>
                    <span>Contact Me</span>
                  </button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
    </>
  );
};
