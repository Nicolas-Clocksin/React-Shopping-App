import React, {useState} from 'react';
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
        <div>
            <h1>Login</h1>
            <input placeholder='email' value={email}  onChange={(event)=>updateEmail(event)}/>
            <input placeholder='password' value={password}  onChange={(event)=>updatePassword(event)}/>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login