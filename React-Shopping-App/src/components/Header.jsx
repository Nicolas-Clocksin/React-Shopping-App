
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext.jsx';
import { CategoriesList } from "../api/catergories.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
function Header(){
const { user, setUser } = useAuth();
 const [ categories, setCategories] = useState([]);
 useEffect(()=>{ CategoriesList().then(setCategories); },[]);
 function logout(){
    setUser(null);
 }
    return(
        <div className="header">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                   
                        <Navbar.Brand as={Link} to="/home">Shopping Application</Navbar.Brand>
                        <Navbar.Toggle aria-controls="main-navbar" />
                        <Navbar.Collapse id="main-navbar">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <NavDropdown title="Categories" id="nav-categories">
                                {
                                    categories.map((category, index)=>{
                                      return  <NavDropdown.Item as={Link} key={category.id} to={`/category/${category.id}`}>{category.name}</NavDropdown.Item>
                                    })
                         
                                }
                            </NavDropdown>
                        </Nav>
                        <Nav className="ms-auto align-items-center">
                            <Navbar.Text className="me-3">
                            <Link to={`/cart`}>
                            <i className="bi bi-cart"></i>
                            </Link>
                            </Navbar.Text>
                            <Navbar.Text className="me-3">
                            Welcome {user?.name || "Guest"}
                            </Navbar.Text>
                            <Nav.Link as="button" onClick={logout} className="btn btn-link p-0">
                            Logout
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
