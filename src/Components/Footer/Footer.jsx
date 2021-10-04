import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg="light" variant="light" fixed="bottom">
            <Container>
                <p className="text-center w-100 pt-2">Copyright @2021 Programming Hero</p>
            </Container>
        </Navbar>
    );
};

export default Footer;