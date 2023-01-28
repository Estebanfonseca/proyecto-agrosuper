import React from "react";

export default function Login() {
    return( 
    <div className="container-log">
        <form className="login">
        <h1>Login</h1>
        <label> Usuario
            <input placeholder="Nombre de usuario..." />
        </label>
        <label> Password
            <input type='password' placeholder="Password..." />
        </label>
        <input className="btn-log" type='submit' value='Entrar'  />
        </form>
    </div>
)}
