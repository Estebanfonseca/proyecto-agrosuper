import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({clase}) {
  return (
    <div className='navbar'>
        <button>Cerdo</button>
        <button>Pollo</button>
        <button>Pavo</button>
        <Link  className={clase?'active-link link':'link'} to="/editor">Editor</Link>
    </div>
  )
}
