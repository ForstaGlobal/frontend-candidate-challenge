import { Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={""}
            alt="Forsta"
            style={{ width: "50px", marginRight: "10px" }} 
          />{" "}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
