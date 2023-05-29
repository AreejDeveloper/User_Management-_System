import React from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="info" variant="dark" expand="lg">
                <NavLink className="navbar-brand" exact to="#">UMS-APP</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                        <NavLink className="nav-link" exact to="/about">About</NavLink>
                        <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <NavLink  className="btn btn-outline-light me-4" excat to="/users/add" >Add User</NavLink>
            </Navbar>
        </div>
    )
}
export default NavBar;