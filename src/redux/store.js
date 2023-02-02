import { configureStore } from "@reduxjs/toolkit";
import variableReducer from "./reducer/graphicReducer";
import filterReducer from "./reducer/filterReducer";
import tableReducer from "./reducer/tableReducer";
import textoReducer from "./reducer/textareaReducer";
import valorReducer from "./reducer/valorReducer";

export const store = configureStore({
    reducer:{variableReducer,filterReducer,tableReducer,textoReducer,valorReducer}
})