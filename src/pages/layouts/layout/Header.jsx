import React from 'react'

export default function Header({clic}) {
  return (
    <div className='header'>
        <img className='logo' src='https://uploads-ssl.webflow.com/5e97df93958d593cca9157a4/62c5f54f349880e24852fd07_Logo_agrosuper.png' alt='logo-agrosuper'/>
        {!clic? <h1>General Carnes</h1> : <h1>General Variaciones</h1>}
        <button>User</button>
    </div>
  )
}
