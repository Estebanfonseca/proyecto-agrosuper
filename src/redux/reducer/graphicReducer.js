import { createReducer } from "@reduxjs/toolkit";
import variableActions from "../actions/graphicAction";


const initialState = {
    proyectado:[],
    real:[],
    variableEjeX:[],
    variableEjeY:[],
    variableEjeY2:[],
    deslizante:[],
    afectadas:[]
}

const variableReducer = createReducer(initialState,(variable)=>{
    variable.addCase(variableActions.getGraphic.fulfilled,(state,action)=>{
        return {...state,...action.payload}
    })

    variable.addCase(variableActions.variable.fulfilled,(state,action)=>{
        return {...state,...action.payload}
    })
})

export default variableReducer