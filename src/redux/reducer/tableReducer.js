import { createReducer } from "@reduxjs/toolkit";
import tableActions from "../actions/tableActions";

const initialState = {
    table:[]
}

const tableReducer = createReducer(initialState,(table)=>{
    table.addCase(tableActions.getTable.fulfilled,(state,action)=>{
        return {...state,...action.payload}
    })
})
export default tableReducer
