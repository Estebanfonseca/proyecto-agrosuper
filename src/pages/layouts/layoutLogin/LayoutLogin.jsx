import React from 'react'
import HeaderLogin from './HeaderLogin'
import Login from '../../../components/Login'
import FooterLogin from './FooterLogin'

export default function LayoutLogin() {
  return (
    <div>
        <HeaderLogin/>
        <Login/>
        <FooterLogin/>
    </div>
  )
}
