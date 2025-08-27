import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHouse,
  faLock,
  faPenToSquare,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

function Navbar1() {
  const { token, logout } = useUser();
  const { totalPrice } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // redirige a Home después de cerrar sesión
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Pizzería Mamma Mia
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-2">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="outline-light">
                <FontAwesomeIcon icon={faHouse} className="me-1" /> Home
              </Button>
            </Link>

            {token ? (
              <>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <Button variant="outline-light">
                    <FontAwesomeIcon icon={faUser} className="me-1" /> Profile
                  </Button>
                </Link>
                <Button variant="outline-light" onClick={handleLogout}>
                  <FontAwesomeIcon icon={faLock} className="me-1" /> Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/loginPage" style={{ textDecoration: "none" }}>
                  <Button variant="outline-light">
                    <FontAwesomeIcon
                      icon={faRightToBracket}
                      className="me-1"
                    />{" "}
                    Login
                  </Button>
                </Link>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button variant="outline-light">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="me-1"
                    />{" "}
                    Register
                  </Button>
                </Link>
              </>
            )}

            <Link to="/cart" style={{ textDecoration: "none" }}>
              <Button variant="outline-light">
                <FontAwesomeIcon icon={faCartShopping} className="me-1" /> Total: $
                {totalPrice.toLocaleString("es-CL")}
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
