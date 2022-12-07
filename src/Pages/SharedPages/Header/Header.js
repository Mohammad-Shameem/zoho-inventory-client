import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import headerimg from "../../../images/logo/header-img.png";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { signOut } from "firebase/auth";
import "./Header.css";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth);
    navigate("/home");
  };
  return (
    <Navbar
      style={{ height: "90px", width: "100%" }}
      className="navbar"
      collapseOnSelect
      expand="lg"
      sticky="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img style={{ width: "140px" }} src={headerimg} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={CustomLink} to="/home">
              <span className="nav-text"> Home</span>
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/blogs" className="nav-text">
              <span className="nav-text"> Blogs</span>
            </Nav.Link>
            <Nav.Link href="/home#home-item">
              <span className="nav-text">Inventory</span>
            </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <div className="d-flex justify-content-center align-items-center all-links">
                <button
                  className="signout-btn me-2 nav-text"
                  onClick={handleSignOut}
                >
                  <span className="nav-text"> Sign Out</span>
                </button>
                <Link className="signout-btn me-2" to={"/addnewitem"}>
                  <span className="nav-text"> Add Item</span>
                </Link>
                <Link className="signout-btn me-2" to={"/inventory"}>
                  <span className="nav-text"> Manage Item</span>
                </Link>
                <Link className="signout-btn me-2" to={"/myitem"}>
                  <span className="nav-text"> My Item</span>
                </Link>
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <Nav.Link className="me-2 nav-text" as={CustomLink} to="/login">
                  <span className="nav-text"> Log In</span>
                </Nav.Link>
                <Nav.Link
                  className="me-2 nav-text"
                  as={CustomLink}
                  to="/signup"
                >
                  <span className="nav-text"> Sign Up</span>
                </Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
