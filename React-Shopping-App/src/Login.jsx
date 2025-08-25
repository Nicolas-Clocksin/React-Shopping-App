import React, {useContext} from 'react';
import { UserContext } from './App';
function Login(){
   const user = useContext(UserContext);
    return(
        <div>
            <h1>Login</h1>
            <input placeholder='email' />
            <input placeholder='password' />
        </div>
    )
}

export default Login