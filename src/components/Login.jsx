import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import loginActions from "../redux/actions/loginAction";
import { useState } from "react";

export default function Login() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let { login } = loginActions;
    let [name,setName] = useState('')
    let [pass,setPass] = useState('')


    console.log(usuario)
    let iniciarSesion = ()=>{
        if(name === 'devsafio' && pass === 'tokentokentokenABC') {
            dispatch(login())
            navigate('/general')
        }else{
            alert('Usuario o Contraseña Incorrectos')
        }
    }


    return (
        <div className="container-log">
            <form className="login">
                <h1>Login</h1>
                <label>
                    Usuario
                    <input placeholder="Nombre de usuario..."type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
                </label>
                <label>
                    Password
                    <input type="password" placeholder="Password..." value={pass} onChange={(e)=>{ setPass(e.target.value)}}/>
                </label>
                <input className="btn-log" type="submit" value="Entrar" onClick={()=>iniciarSesion()} />
            </form>
        </div>
    );
}
