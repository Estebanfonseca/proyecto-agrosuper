import React , {useEffect}from "react";
import FooterLogin from "../layoutLogin/FooterLogin";
import loginActions from "../../../redux/actions/loginAction";
import { useDispatch } from "react-redux";


export default function Layout({children}) {
let {login} = loginActions
let dispatch = useDispatch()
useEffect(()=>{
    dispatch(login())
},[])

    return (
        <div>
            {children}
            <FooterLogin />
        </div>
    );
}
