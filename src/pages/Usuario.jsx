import React from 'react'
import Header from './layouts/layout/Header'
import Perfil from '../components/Perfil'
import Navbar from '../components/Navbar'

export default function Usuario() {
  return (
    <div>
        <Header texto={'Mi Perfil'} />
        <div className='container-main'>
            <Navbar />
            <Perfil/>
        </div>
    </div>
  )
}
