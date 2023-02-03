import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({clase}) {
  return (
    <div className='navbar'>
        <Link  className={clase === 'general'?'active-link link':'link'} to="/general">General</Link>
        <Link  className={clase === 'cerdo'?'active-link link':'link'} to="/cerdo">Cerdo</Link>
        <Link  className={clase === 'pollo'?'active-link link':'link'} to="/pollo">Pollo</Link>
        <Link  className={clase === 'pavo'?'active-link link':'link'} to="/pavo">Pavo</Link>
        <Link  className={clase === 'editor'?'active-link link':'link'} to="/editor">Editor</Link>
    </div>
  )
}
