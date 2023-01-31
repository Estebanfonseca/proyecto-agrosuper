import { createReducer } from "@reduxjs/toolkit";
import variableActions from "../actions/graphicAction";


const initialState = {
    proyectado:[],
    real:[]
}

const variableReducer = createReducer(initialState,(variable)=>{
    variable.addCase(variableActions.getGraphic.fulfilled,(state,action)=>{
        return {...state,...action.payload}
    })
})

export default variableReducer