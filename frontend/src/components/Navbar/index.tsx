import {Navbar as Nav, Container, NavbarBrand } from 'react-bootstrap';

const Navbar = () => {
    return (
        <Nav bg="dark" variant="dark">
            <Container>
                <NavbarBrand href="#home">
                    Dinopedia
                </NavbarBrand>
            </Container>
        </Nav>
    )
}

export default Navbar;