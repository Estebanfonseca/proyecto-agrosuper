import React from 'react'
import Header from '../pages/layouts/layout/Header'
import Navbar from './Navbar'

export default function Construccion({texto,clase}) {
  return (
    <div>
        <Header texto={texto}/>
        <div className='container-main'>
            <Navbar clase={clase} />
            <div className='container-editor'>
            <img src='https://www.concordia.gob.ar/sites/default/files/construccion.png' alt='En construccion' />
            </div>
        </div>
    </div>
  )
}
