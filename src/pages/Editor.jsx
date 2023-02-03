import React from "react";
import Navbar from "../components/Navbar";
import Header from "./layouts/layout/Header";
import { useState } from "react";
import EditorTable from "../components/EditorTable";
import Variable from "../components/Variable";

export default function Editor() {
    let [clic,setClic] = useState(false)
    return (
        <div>
            <Header texto={'Editor Semanal'} />
            <div className="botones">
                <button className={!clic ? "active" : ""} onClick={() => setClic(!clic)}>Editor</button>
                <button className={clic ? "active" : ""} onClick={() => setClic(!clic)}>Variable</button>
            </div>
            <div className="container-main">
                <Navbar clase={'editor'}  />
                {!clic?<EditorTable/>:<Variable/>}
            </div>
        </div>
    );
}
