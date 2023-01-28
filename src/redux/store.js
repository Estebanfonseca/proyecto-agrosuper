import { configureStore } from "@reduxjs/toolkit";
import variableReducer from "./reducer/variableReducer";

export const store = configureStore({
    reducer:{variableReducer}
})