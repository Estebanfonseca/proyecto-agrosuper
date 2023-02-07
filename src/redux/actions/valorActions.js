
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const probarValor = createAsyncThunk('probarValor',async(valor)=>{
    try {
        let datos = {
            auth: {
            username: "devsafio",
            token:
            "tokentokentokenABC"
            },
            var_name : "variableA",
            value_test:valor
            }
        let res = await axios.post("https://f11.cl:8090/probarVariable", datos);
        return { nuevoValor:res.data.data };
    } catch (error) {
        return error;
    }
})

const valorActions = {
    probarValor
}
export default valorActions