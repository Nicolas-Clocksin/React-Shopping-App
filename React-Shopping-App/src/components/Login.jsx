import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({users, setUser}){
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   function updateEmail(event){
    setEmail(event.target.value);
   }
   function updatePassword(event){
    setPassword(event.target.value);
   }
   function login(){
        users.map((user)=>{
            if(user.email === email && user.password === password){
                setUser(user);
            }
        });
   }
    return(
    <div className='login-container'>
        <Form className='login' >
            <Form.Group className="mb-3" controlId="emailInput" >
                <Form.Label>Email address</Form.Label>
                <Form.Control size='large' type="email" placeholder="name@example.com" value={email} onChange={(event)=>updateEmail(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="passwordInput">
                <Form.Label>Password</Form.Label>
                <Form.Control size='large' type='password' value={password} onChange={(event)=>updatePassword(event)}/>
            </Form.Group>
            <Button onClick={login}>Login</Button>
        </Form>
    </div>
    )
}

export default Login