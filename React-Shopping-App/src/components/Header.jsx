import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CartContext } from "../context/CartContext.jsx";
import { CategoryContext } from "../context/CategoryContext.jsx";
function Header() {
  const { user, setUser } = useAuth();
  const { cartItems } = useContext(CartContext);
  const { categories } = useContext(CategoryContext);
  function logout() {
    setUser(null);
  }
  return (
    <div className="header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={Link} to="/home">
            Shopping Application
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <NavDropdown title="Categories" id="nav-categories">
                {categories.map((category, index) => {
                  return (
                    <NavDropdown.Item
                      as={Link}
                      key={category.id}
                      to={`/category/${category.id}`}
                    >
                      {category.name}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto align-items-center">
              <Navbar.Text className="me-3">
                <Link to={`/cart`} className="cartLink">
                  <i className="bi bi-cart"></i> {cartItems?.length || 0}
                </Link>
              </Navbar.Text>
              <Navbar.Text className="me-3">
                Welcome {user?.name || "Guest"}
              </Navbar.Text>
              <Nav.Link
                as="button"
                onClick={logout}
                className="btn btn-link p-0"
              >
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
