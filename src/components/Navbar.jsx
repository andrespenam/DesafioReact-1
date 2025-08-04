import React, { useEffect, useState } from "react";
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

function Navbar1({ total = 0 }) {
  const [token, setToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem("session");
    setToken(!!session);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("session");
    setToken(false);
    navigate("/loginPage");
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Pizzería Mamma Mia
        </Navbar.Brand>

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
                  <FontAwesomeIcon icon={faRightToBracket} className="me-1" /> Login
                </Button>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button variant="outline-light">
                  <FontAwesomeIcon icon={faPenToSquare} className="me-1" /> Register
                </Button>
              </Link>
            </>
          )}

          <Link to="/cart" style={{ textDecoration: "none" }}>
            <Button variant="outline-light" disabled>
              <FontAwesomeIcon icon={faCartShopping} className="me-1" /> Total: $
              {total.toLocaleString("es-CL")}
            </Button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
