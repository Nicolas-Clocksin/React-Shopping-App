/*
  Title:
  Created By: Nicolas Clocksin

  Description: 
*/
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignUpModal from "../modals/SignUpModal";
import { UserList } from "../api/users";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [users, setUsers] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    UserList().then((users) => {
      setUsers(users);
    });
  }, []);

  function updateEmail(event) {
    setEmail(event.target.value);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
  }

  function login() {
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setUser(found);
      navigate("/home", { replace: true });
    } else {
      alert("Invalid credentials");
    }
  }
  return (
    <div className="login-container">
      <Form className="login">
        <Form.Group className="mb-3" controlId="emailInput">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            size="large"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => updateEmail(event)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordInput">
          <Form.Label>Password</Form.Label>
          <Form.Control
            size="large"
            type="password"
            value={password}
            onChange={(event) => updatePassword(event)}
          />
        </Form.Group>
        <div className="login-buttons">
          <Button onClick={login}>Login</Button>
          <SignUpModal setUsers={setUsers} />
        </div>
      </Form>
    </div>
  );
}

export default Login;
