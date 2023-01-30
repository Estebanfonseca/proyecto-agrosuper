import { configureStore } from "@reduxjs/toolkit";
import variableReducer from "./reducer/variableReducer";
import filterReducer from "./reducer/filterReducer";

export const store = configureStore({
    reducer:{variableReducer,filterReducer}
})