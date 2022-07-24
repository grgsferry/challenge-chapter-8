import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="mx-3" to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Players
            </Link>
            <Link className="mx-3" to="/search" style={{ textDecoration: "none", color: "inherit" }}>
              Search
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
