import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import headerimg from '../../../images/logo/header-img.png'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth)
        navigate('/home')
    }
    return (

        <Navbar style={{ height: "90px", width: "100%" }} className="navbar" collapseOnSelect expand="lg" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home"><img style={{ height: "140px" }} src={headerimg} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link href="/home#home-item">Inventory</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <div className='d-flex justify-content-center align-items-center all-links'>
                                    <button className='signout-btn me-2' onClick={handleSignOut}>Sign Out</button>
                                    <Link className='signout-btn me-2' to={'/addnewitem'}>Add Item</Link>
                                    <Link className='signout-btn me-2' to={'/inventory'}>Manage Item</Link>
                                    <Link className='signout-btn me-2' to={'/myitem'}>My Item</Link>
                                </div>
                                : <div className='d-flex justify-content-center align-items-center' >
                                    <Nav.Link className='me-2' as={CustomLink} to="/login">Login</Nav.Link>
                                    <Nav.Link className='me-2' as={CustomLink} to="/signup">Sign Up</Nav.Link>
                                </div>

                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;