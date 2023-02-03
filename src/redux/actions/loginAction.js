import { createAction } from "@reduxjs/toolkit";

const login = createAction('login',()=>{
    let user = [{user:'devsafio',password:'tokentokentokenABC'}]
    localStorage.setItem('user', JSON.stringify(user))
    return {
        payload:{
            login:true
        }
    }
})

const logOut = createAction('logOut',()=>{
    localStorage.removeItem('user')
    return {
        payload:{
            login:false
        }
    }
})


const loginActions = {
    login,logOut
}

export default loginActions