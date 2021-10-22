import { Container, Navbar, NavbarBrand } from "react-bootstrap";

const Footer = () => {
    return (
        <div style={{marginTop: 'auto'}}>  
            <Navbar color="dark" bg="dark">
                <Container>
                    <NavbarBrand style={{color: 'white'}}>
                    Copyright 2021 by Leandro Cruvinel. All Rights Reserved.
                    </NavbarBrand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer;