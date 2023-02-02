import { createReducer } from "@reduxjs/toolkit";
import valorActions from "../actions/valorActions";


const initialState = {
    nuevoValor:[]
}

const valorReducer = createReducer(initialState,(valor)=>{
    valor.addCase(valorActions.probarValor.fulfilled,(state,action)=>{
        return {...state,...action.payload}
    })
})

export default valorReducer