import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import loginActions from '../redux/actions/loginAction'


export default function User () {

    let [showLogin, setShowLogin] = useState(false)
    let {logOut} = loginActions
    let location = useLocation()
    let navigate = useNavigate()
    let dispatch = useDispatch()

    useEffect(() => {
        if(showLogin){
            document.addEventListener('mousedown', e => {
                if(!e.target.className.includes('nav-link') && !e.target.className.includes('user-icon') && !e.target.className.includes('name-anim')){
                    setShowLogin(false)
                }
            })
        }
    }, [showLogin])
    useEffect(() => {
        setShowLogin(false)
    }, [location])
    let keyHandler = (ev) => {
        if(ev.key === 'Escape'){
            setShowLogin(false)
        }
    }
    let loginHandler = () => {
        setShowLogin(!showLogin)
    }
    let signOutHandler = (e) => {
       dispatch(logOut())
       navigate('/')
    }

  return (
         <div className="m-1 me-3" onKeyUp={keyHandler}>
            <button onClick={loginHandler}>
                <img className='user-icon' src='https://www.cavsi.com/preguntasrespuestas/images/que-es-usuario.jpg'  alt="user" />
            </button>
            <ul className={`${showLogin ? '' : 'hidden'} drop-list list-border`}>
                    <li><Link className='nav-link' to={`/profile`}>Mi perfil</Link></li>
                    <li><button onClick={signOutHandler} className='nav-link sign-out'>Logout</button></li>
            </ul>
        </div>
  )
}