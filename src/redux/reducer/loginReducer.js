import { createReducer } from "@reduxjs/toolkit";
import loginActions from "../actions/loginAction";

const initialState = {
    login:false,
}

const loginReducer = createReducer(initialState,login=>{
    login.addCase(loginActions.login,(state,action)=>{
        return {
            ...state,
            ...action.payload
        }
    })
})

export default loginReducer