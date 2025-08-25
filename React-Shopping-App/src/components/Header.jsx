
import React, {useState} from "react"
function Header({user, setUser}){
 function logout(){
    setUser(null);
 }
    return(
        <div className="header">
            <h1>Shopping Site</h1>
            <div>
                <p>Welcome <b>{user.name}</b></p>
                <p><a onClick={logout}>Logout</a></p>
            </div>
        </div>
    )
}

export default Header