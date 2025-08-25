
import React from "react"
function Header({user}){
    return(
        <div className="header">
            <h1>Shopping Site</h1>
            <p>Welcome {user.name}</p>
        </div>
    )
}

export default Header