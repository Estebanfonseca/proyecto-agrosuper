import { configureStore } from "@reduxjs/toolkit";
import variableReducer from "./reducer/graphicReducer";
import filterReducer from "./reducer/filterReducer";
import tableReducer from "./reducer/tableReducer";

export const store = configureStore({
    reducer:{variableReducer,filterReducer,tableReducer}
})