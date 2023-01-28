import React from "react";
import Header from "./Header";
import Navbar from "../../../components/Navbar";
import FooterLogin from "../layoutLogin/FooterLogin";
import Main from "../../../components/Main";

export default function Layout() {
    return (
        <div>
            <Header />
            <div className="container-main">
                <Navbar />
                <Main/>
            </div>
            <FooterLogin />
        </div>
    );
}
