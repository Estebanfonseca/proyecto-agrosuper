import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getTable = createAsyncThunk('getTable',async()=>{
    try{
        let datos = {
            "auth": {
            "username": "devsafio",
            "token":"tokentokentokenABC"
            }
            }
            let res = await axios.post('https://f11.cl:8090/obtenerVariaciones',datos)
            return{table:res.data.data}
    }catch(error){
        return error
    }
})
const getEditor = createAsyncThunk('getEditor',async()=>{
    try{
        let datos = {
            "auth": {
            "username": "devsafio",
            "token":"tokentokentokenABC"
            }
            }
            let res = await axios.post('https://f11.cl:8090/editorSemanal',datos)
            return{editor:res.data.data}
    }catch(error){
        return error
    }
})

const tableActions = {
    getTable,
    getEditor
}

export default tableActions