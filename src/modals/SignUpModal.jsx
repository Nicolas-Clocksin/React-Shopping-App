/*
  Title:
  Created By: Nicolas Clocksin

  Description: 
*/
import React, { useState } from "react";
import { addUser } from "../api/users";
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Feedback from "react-bootstrap/esm/Feedback";

function SignUpModal({users, setUsers}){
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    function updateName(event){
        setName(event.target.value);
    }
    function updateRole(event){
        setRole(event.target.value);
    }
    function updateEmail(event){
        setEmail(event.target.value);
    }
    function updatePassword(event){
        setPassword(event.target.value);
    }
    function createUser(){
        const newUser = {
            id: Math.random(),
            name: name,
            email: email,
            password: password,
            role: role
        }
            setUsers((u)=>[...u, newUser]);
        
        setShow(false);
    }
    

    return(
        <div>
        <Button variant='secondary' onClick={handleShow}>Sign Up</Button>
        <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" onChange={(event)=>updateName(event)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="text" onChange={(event)=>updateRole(event)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange={(event)=>updateEmail(event)}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(event)=>updatePassword(event)}></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{justifyContent: 'space-evenly'}}>
                    <Button onClick={createUser}>Create Account</Button>
                    <Button onClick={handleClose} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
      
    )
}

export default SignUpModal