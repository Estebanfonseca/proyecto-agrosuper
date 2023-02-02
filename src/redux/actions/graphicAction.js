import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getGraphic = createAsyncThunk("getGraphic", async () => {
    try {
        let datos = {
            auth: {
                username: "devsafio",
                token: "tokentokentokenABC",
            },
            query: {
                initial_date: {
                    month: 1,
                    year: 2020,
                },
                end_date: {
                    month: 1,
                    year: 2025,
                },
            },
        };
        let res = await axios.post("http://f11.cl:8090/getCarnesRealProyeccion", datos);
        return { proyectado: res.data.proyectado, real: res.data.real };
    } catch (error) {
        return error;
    }
});
const variable = createAsyncThunk("variable1", async () => {
    try {
        let datos = {
            auth: {
                username: "devsafio",
                token: "tokentokentokenABC",
            },
            var_name: "variableA",
        };
        let res = await axios.post("http://f11.cl:8090/editorVariables", datos);
        return {
            variableEjeX: res.data.data.serie_A.x,
            variableEjeY: res.data.data.serie_A.y,
            variableEjeY2: res.data.data.serie_B.y,
            deslizante: res.data.data.deslizante,
            afectadas: res.data.data.afectadas,
        };
    } catch (error) {
        return error;
    }
});

const variableActions = {
    getGraphic,
    variable,
};

export default variableActions;
