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
        return {table:[
            {
                "nro": 1,
                "linea": "Pollos",
                "ropSemAnt": 100,
                "ropSemActual": 110,
                "rop": 10,
                "ventas": 5,
                "costoVentas": 3,
                "GAV": 2,
                "toneladasTotal": 50,
                "volNacional": 30,
                "volExport": 70
            },
            {
                "nro": 2,
                "linea": "Cerdos",
                "ropSemAnt": 150.0,
                "ropSemActual": 165.0,
                "rop": 15.0,
                "ventas": 7.5,
                "costoVentas": 4.5,
                "GAV": 3.0,
                "toneladasTotal": 75.0,
                "volNacional": 45.0,
                "volExport": 105.0
            },
            {
                "nro": 3,
                "linea": "Pavos",
                "ropSemAnt": 200,
                "ropSemActual": 220,
                "rop": 20,
                "ventas": 10,
                "costoVentas": 6,
                "GAV": 4,
                "toneladasTotal": 100,
                "volNacional": 60,
                "volExport": 140
            },
            {
                "nro": 4,
                "linea": "Procesados",
                "ropSemAnt": 229.99999999999997,
                "ropSemActual": 252.99999999999997,
                "rop": 23.0,
                "ventas": 11.5,
                "costoVentas": 6.8999999999999995,
                "GAV": 4.6,
                "toneladasTotal": 114.99999999999999,
                "volNacional": 69.0,
                "volExport": 161.0
            },
            {
                "nro": 5,
                "linea": "Otros",
                "ropSemAnt": 70.0,
                "ropSemActual": 77.0,
                "rop": 7.0,
                "ventas": 3.5,
                "costoVentas": 2.0999999999999996,
                "GAV": 1.4,
                "toneladasTotal": 35.0,
                "volNacional": 21.0,
                "volExport": 49.0
            }
        ]}
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
        return {editor:[
            {
                "nombre_var": "variableA",
                "anterior": 5,
                "actual": 10,
                "variacion_porc": 100,
                "status": "rojo"
            },
            {
                "nombre_var": "variableB",
                "anterior": 5,
                "actual": 6,
                "variacion_porc": 20,
                "status": "amarillo"
            },
            {
                "nombre_var": "variableC",
                "anterior": 5,
                "actual": 5.05,
                "variacion_porc": 1,
                "status": "verde"
            },
            {
                "nombre_var": "variableD",
                "anterior": 100,
                "actual": 99,
                "variacion_porc": -1,
                "status": "verde"
            }
        ]}
    }
})

const tableActions = {
    getTable,
    getEditor
}

export default tableActions