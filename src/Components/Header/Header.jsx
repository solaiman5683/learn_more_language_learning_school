import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar style={{background: 'linear-gradient(to right, #8360c3, #2ebf91)'}} variant="dark" sticky="top" className="py-3">
            <Container>
                <NavLink className='navbar-brand' to='/'>LearnMore</NavLink>
                <Nav className="ms-auto">
                    <NavLink activeClassName='active' className='nav-link' to='/home'>Home</NavLink>
                    <NavLink activeClassName='active' className='nav-link' to='/courses'>Courses</NavLink>
                    <NavLink activeClassName='active' className='nav-link' to='/teachers'>Teachers</NavLink>
                    <NavLink activeClassName='active' className='nav-link' to='/about'>About</NavLink>
                    <NavLink activeClassName='active' className='nav-link' to='/contact'>Contact</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;