
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { useEffect, useState } from "react";
import { useAuth } from '../auth/AuthContext.jsx';
import { CategoriesList } from "../api/catergories.js";
function Header(){
 const { user } = useAuth();
 const [ categories, setCategories] = useState([]);
 useEffect(()=>{ CategoriesList().then(setCategories); },[]);
 function logout(){
    user = null;
 }
    return(
        <div className="header">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                   
                        <Navbar.Brand href="#home">Shopping Application</Navbar.Brand>
                        <Navbar.Toggle aria-controls="main-navbar" />
                        <Navbar.Collapse id="main-navbar">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" onClick={updateSelectedItem}>Home</Nav.Link>
                            <NavDropdown title="Categories" id="nav-categories">
                                {
                                    categories.map((category, index)=>{
                                      return  <NavDropdown.Item key={category.id || index} href="#action/1">{category.name}</NavDropdown.Item>
                                    })
                         
                                }
                            </NavDropdown>
                        </Nav>
                        <Nav className="ms-auto align-items-center">
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