import React from "react";
import Header from "./Header";
import Navbar from "../../../components/Navbar";
import FooterLogin from "../layoutLogin/FooterLogin";

export default function Layout() {
    return (
        <div>
            <Header />
            <div className="container-main">
                <Navbar />
                
            </div>
            <FooterLogin />
        </div>
    );
}
