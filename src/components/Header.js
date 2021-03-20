import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {AccountCircle, Search} from "@material-ui/icons";
import {Typography} from "@material-ui/core";

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><Typography variant="h4" color="primary">IMDb</Typography></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Watch</Nav.Link>
                        <Nav.Link href="#pricing">Celebs</Nav.Link>
                        <Nav.Link href="#pricing">Awards & Events</Nav.Link>
                        <Nav.Link href="#pricing">Community</Nav.Link>
                        <Nav.Link href="#pricing"><Search/></Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Watchlist</Nav.Link>
                        <Nav.Link href="#deets"><AccountCircle fontSize="large"/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
