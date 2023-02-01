import React from 'react'
import MainGraphic from '../components/MainGraphic'
import MainTable from "../components/MainTable";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from './layouts/layout/Header';

export default function General() {
    let [clic,setClic] = useState(false)
  return (
    <div>
        <Header clic={clic} />
        <div className="botones">
                <button className={!clic? 'active' : ''} onClick={()=>setClic(!clic)}>General</button>
                <button className={clic? 'active' : ''} onClick={()=>setClic(!clic)}>Variaciones</button>
            </div>
            <div className="container-main">
                <Navbar />
                {!clic?<MainGraphic />:<MainTable/>}
            </div>
    </div>
  )
}
