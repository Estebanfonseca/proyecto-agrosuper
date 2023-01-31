import React from "react";
import FooterLogin from "../layoutLogin/FooterLogin";

export default function Layout({children}) {

    return (
        <div>
            {children}
            <FooterLogin />
        </div>
    );
}
