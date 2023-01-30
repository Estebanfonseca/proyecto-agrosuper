import { createReducer } from "@reduxjs/toolkit";
import filterActions from "../actions/filterActions";

const initialState = {
    anio:2022,
    usd:'resultado_USDM'
}

const filterReducer = createReducer(initialState, filter =>{
    filter.addCase(filterActions.filterAnio,(state,action)=>{
        return {
            ...state,
            ...action.payload
        }
    })
    filter.addCase(filterActions.filterUsd,(state,action)=>{
        return{
            ...state,
            ...action.payload
        }
    })
})

export default filterReducer