import React from "react";
import Header from "./Header";
import Navbar from "../../../components/Navbar";
import FooterLogin from "../layoutLogin/FooterLogin";
import MainGraphic from "../../../components/MainGraphic";
import MainTable from "../../../components/MainTable";
import { useState } from "react";

export default function Layout() {
    let [clic,setClic] = useState(false)
    return (
        <div>
            <Header clic={clic}/>
            <div className="botones">
                <button className={!clic? 'active' : ''} onClick={()=>setClic(!clic)}>General</button>
                <button className={clic? 'active' : ''} onClick={()=>setClic(!clic)}>Variaciones</button>
            </div>
            <div className="container-main">
                <Navbar />
                {!clic?<MainGraphic />:<MainTable/>}
            </div>
            <FooterLogin />
        </div>
    );
}
