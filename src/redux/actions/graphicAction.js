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
        console.log(res)
        return { proyectado: res.data.proyectado, real: res.data.real } || {real:[
            {
                "concepto": "INGRESO",
                "anio": 2020,
                "mes": 1,
                "resultado_USDM": 3218.0,
                "resultado_USD_TON": 1609.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2021,
                "mes": 1,
                "resultado_USDM": 3218.0,
                "resultado_USD_TON": 1609.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2022,
                "mes": 1,
                "resultado_USDM": 3218.0,
                "resultado_USD_TON": 1609.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2020,
                "mes": 2,
                "resultado_USDM": 3428.0,
                "resultado_USD_TON": 1714.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2021,
                "mes": 2,
                "resultado_USDM": 3428.0,
                "resultado_USD_TON": 1714.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2022,
                "mes": 2,
                "resultado_USDM": 3428.0,
                "resultado_USD_TON": 1714.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2020,
                "mes": 3,
                "resultado_USDM": 3470.0,
                "resultado_USD_TON": 1735.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2021,
                "mes": 3,
                "resultado_USDM": 3470.0,
                "resultado_USD_TON": 1735.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2022,
                "mes": 3,
                "resultado_USDM": 3470.0,
                "resultado_USD_TON": 1735.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2020,
                "mes": 4,
                "resultado_USDM": 2096.0,
                "resultado_USD_TON": 1048.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2021,
                "mes": 4,
                "resultado_USDM": 2096.0,
                "resultado_USD_TON": 1048.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2022,
                "mes": 4,
                "resultado_USDM": 2096.0,
                "resultado_USD_TON": 1048.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2020,
                "mes": 5,
                "resultado_USDM": 1792.0,
                "resultado_USD_TON": 896.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2021,
                "mes": 5,
                "resultado_USDM": 1792.0,
                "resultado_USD_TON": 896.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2020,
                "mes": 6,
                "resultado_USDM": 3722.0,
                "resultado_USD_TON": 1861.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2021,
                "mes": 6,
                "resultado_USDM": 3722.0,
                "resultado_USD_TON": 1861.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2020,
                "mes": 7,
                "resultado_USDM": 2278.0,
                "resultado_USD_TON": 1139.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2021,
                "mes": 7,
                "resultado_USDM": 2278.0,
                "resultado_USD_TON": 1139.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2020,
                "mes": 8,
                "resultado_USDM": 3310.0,
                "resultado_USD_TON": 1655.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2021,
                "mes": 8,
                "resultado_USDM": 3310.0,
                "resultado_USD_TON": 1655.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2020,
                "mes": 9,
                "resultado_USDM": 1504.0,
                "resultado_USD_TON": 752.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2021,
                "mes": 9,
                "resultado_USDM": 1504.0,
                "resultado_USD_TON": 752.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2020,
                "mes": 10,
                "resultado_USDM": 1612.0,
                "resultado_USD_TON": 806.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2021,
                "mes": 10,
                "resultado_USDM": 1612.0,
                "resultado_USD_TON": 806.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2020,
                "mes": 11,
                "resultado_USDM": 1816.0,
                "resultado_USD_TON": 908.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2021,
                "mes": 11,
                "resultado_USDM": 1816.0,
                "resultado_USD_TON": 908.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2020,
                "mes": 12,
                "resultado_USDM": 3778.0,
                "resultado_USD_TON": 1889.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2021,
                "mes": 12,
                "resultado_USDM": 3778.0,
                "resultado_USD_TON": 1889.0
            },
            {
                "concepto": "COSTO",
                "anio": 2020,
                "mes": 1,
                "resultado_USDM": 2218.0,
                "resultado_USD_TON": 1109.0
            },
            {
                "concepto": "COSTO",
                "anio": 2021,
                "mes": 1,
                "resultado_USDM": 2218.0,
                "resultado_USD_TON": 1109.0
            },
            {
                "concepto": "COSTO",
                "anio": 2022,
                "mes": 1,
                "resultado_USDM": 2218.0,
                "resultado_USD_TON": 1109.0
            },
            {
                "concepto": "COSTO",
                "anio": 2020,
                "mes": 2,
                "resultado_USDM": 3878.0,
                "resultado_USD_TON": 1939.0
            },
            {
                "concepto": "COSTO",
                "anio": 2021,
                "mes": 2,
                "resultado_USDM": 3878.0,
                "resultado_USD_TON": 1939.0
            },
            {
                "concepto": "COSTO",
                "anio": 2022,
                "mes": 2,
                "resultado_USDM": 3878.0,
                "resultado_USD_TON": 1939.0
            },
            {
                "concepto": "COSTO",
                "anio": 2020,
                "mes": 3,
                "resultado_USDM": 1960.0,
                "resultado_USD_TON": 980.0
            },
            {
                "concepto": "COSTO",
                "anio": 2021,
                "mes": 3,
                "resultado_USDM": 1960.0,
                "resultado_USD_TON": 980.0
            },
            {
                "concepto": "COSTO",
                "anio": 2022,
                "mes": 3,
                "resultado_USDM": 1960.0,
                "resultado_USD_TON": 980.0
            },
            {
                "concepto": "COSTO",
                "anio": 2020,
                "mes": 4,
                "resultado_USDM": 1678.0,
                "resultado_USD_TON": 839.0
            },
            {
                "concepto": "COSTO",
                "anio": 2021,
                "mes": 4,
                "resultado_USDM": 1678.0,
                "resultado_USD_TON": 839.0
            },
            {
                "concepto": "COSTO",
                "anio": 2022,
                "mes": 4,
                "resultado_USDM": 1678.0,
                "resultado_USD_TON": 839.0
            },
            {
                "concepto": "COSTO",
                "anio": 2020,
                "mes": 5,
                "resultado_USDM": 1140.0,
                "resultado_USD_TON": 570.0
            },
            {
                "concepto": "COSTO",
                "anio": 2021,
                "mes": 5,
                "resultado_USDM": 1140.0,
                "resultado_USD_TON": 570.0
            },
            {
                "concepto": "COSTO",
                "anio": 2020,
                "mes": 6,
                "resultado_USDM": 2446.0,
                "resultado_USD_TON": 1223.0
            },
            {
                "concepto": "COSTO",
                "anio": 2021,
                "mes": 6,
                "resultado_USDM": 2446.0,
                "resultado_USD_TON": 1223.0
            },
            {
                "concepto": "COSTO",
                "anio": 2020,
                "mes": 7,
                "resultado_USDM": 2548.0,
                "resultado_USD_TON": 1274.0
            },
            {
                "concepto": "COSTO",
                "anio": 2021,
                "mes": 7,
                "resultado_USDM": 2548.0,
                "resultado_USD_TON": 1274.0
            },
            {
                "concepto": "COSTO",
                "anio": 2020,
                "mes": 8,
                "resultado_USDM": 2394.0,
                "resultado_USD_TON": 1197.0
            },
            {
                "concepto": "COSTO",
                "anio": 2021,
                "mes": 8,
                "resultado_USDM": 2394.0,
                "resultado_USD_TON": 1197.0
            },
            {
                "concepto": "COSTO",
                "anio": 2020,
                "mes": 9,
                "resultado_USDM": 1338.0,
                "resultado_USD_TON": 669.0
            },
            {
                "concepto": "COSTO",
                "anio": 2021,
                "mes": 9,
                "resultado_USDM": 1338.0,
                "resultado_USD_TON": 669.0
            },
            {
                "concepto": "COSTO",
                "anio": 2020,
                "mes": 10,
                "resultado_USDM": 2540.0,
                "resultado_USD_TON": 1270.0
            },
            {
                "concepto": "COSTO",
                "anio": 2021,
                "mes": 10,
                "resultado_USDM": 2540.0,
                "resultado_USD_TON": 1270.0
            },
            {
                "concepto": "COSTO",
                "anio": 2020,
                "mes": 11,
                "resultado_USDM": 1000.0,
                "resultado_USD_TON": 500.0
            },
            {
                "concepto": "COSTO",
                "anio": 2021,
                "mes": 11,
                "resultado_USDM": 1000.0,
                "resultado_USD_TON": 500.0
            },
            {
                "concepto": "COSTO",
                "anio": 2020,
                "mes": 12,
                "resultado_USDM": 3582.0,
                "resultado_USD_TON": 1791.0
            },
            {
                "concepto": "COSTO",
                "anio": 2021,
                "mes": 12,
                "resultado_USDM": 3582.0,
                "resultado_USD_TON": 1791.0
            },
            {
                "concepto": "GAV",
                "anio": 2020,
                "mes": 1,
                "resultado_USDM": 3594.0,
                "resultado_USD_TON": 1797.0
            },
            {
                "concepto": "GAV",
                "anio": 2021,
                "mes": 1,
                "resultado_USDM": 3594.0,
                "resultado_USD_TON": 1797.0
            },
            {
                "concepto": "GAV",
                "anio": 2022,
                "mes": 1,
                "resultado_USDM": 3594.0,
                "resultado_USD_TON": 1797.0
            },
            {
                "concepto": "GAV",
                "anio": 2020,
                "mes": 2,
                "resultado_USDM": 2326.0,
                "resultado_USD_TON": 1163.0
            },
            {
                "concepto": "GAV",
                "anio": 2021,
                "mes": 2,
                "resultado_USDM": 2326.0,
                "resultado_USD_TON": 1163.0
            },
            {
                "concepto": "GAV",
                "anio": 2022,
                "mes": 2,
                "resultado_USDM": 2326.0,
                "resultado_USD_TON": 1163.0
            },
            {
                "concepto": "GAV",
                "anio": 2020,
                "mes": 3,
                "resultado_USDM": 3910.0,
                "resultado_USD_TON": 1955.0
            },
            {
                "concepto": "GAV",
                "anio": 2021,
                "mes": 3,
                "resultado_USDM": 3910.0,
                "resultado_USD_TON": 1955.0
            },
            {
                "concepto": "GAV",
                "anio": 2022,
                "mes": 3,
                "resultado_USDM": 3910.0,
                "resultado_USD_TON": 1955.0
            },
            {
                "concepto": "GAV",
                "anio": 2020,
                "mes": 4,
                "resultado_USDM": 3724.0,
                "resultado_USD_TON": 1862.0
            },
            {
                "concepto": "GAV",
                "anio": 2021,
                "mes": 4,
                "resultado_USDM": 3724.0,
                "resultado_USD_TON": 1862.0
            },
            {
                "concepto": "GAV",
                "anio": 2022,
                "mes": 4,
                "resultado_USDM": 3724.0,
                "resultado_USD_TON": 1862.0
            },
            {
                "concepto": "GAV",
                "anio": 2020,
                "mes": 5,
                "resultado_USDM": 3098.0,
                "resultado_USD_TON": 1549.0
            },
            {
                "concepto": "GAV",
                "anio": 2021,
                "mes": 5,
                "resultado_USDM": 3098.0,
                "resultado_USD_TON": 1549.0
            },
            {
                "concepto": "GAV",
                "anio": 2020,
                "mes": 6,
                "resultado_USDM": 3260.0,
                "resultado_USD_TON": 1630.0
            },
            {
                "concepto": "GAV",
                "anio": 2021,
                "mes": 6,
                "resultado_USDM": 3260.0,
                "resultado_USD_TON": 1630.0
            },
            {
                "concepto": "GAV",
                "anio": 2020,
                "mes": 7,
                "resultado_USDM": 2144.0,
                "resultado_USD_TON": 1072.0
            },
            {
                "concepto": "GAV",
                "anio": 2021,
                "mes": 7,
                "resultado_USDM": 2144.0,
                "resultado_USD_TON": 1072.0
            },
            {
                "concepto": "GAV",
                "anio": 2020,
                "mes": 8,
                "resultado_USDM": 1486.0,
                "resultado_USD_TON": 743.0
            },
            {
                "concepto": "GAV",
                "anio": 2021,
                "mes": 8,
                "resultado_USDM": 1486.0,
                "resultado_USD_TON": 743.0
            },
            {
                "concepto": "GAV",
                "anio": 2020,
                "mes": 9,
                "resultado_USDM": 1720.0,
                "resultado_USD_TON": 860.0
            },
            {
                "concepto": "GAV",
                "anio": 2021,
                "mes": 9,
                "resultado_USDM": 1720.0,
                "resultado_USD_TON": 860.0
            },
            {
                "concepto": "GAV",
                "anio": 2020,
                "mes": 10,
                "resultado_USDM": 3834.0,
                "resultado_USD_TON": 1917.0
            },
            {
                "concepto": "GAV",
                "anio": 2021,
                "mes": 10,
                "resultado_USDM": 3834.0,
                "resultado_USD_TON": 1917.0
            },
            {
                "concepto": "GAV",
                "anio": 2020,
                "mes": 11,
                "resultado_USDM": 2628.0,
                "resultado_USD_TON": 1314.0
            },
            {
                "concepto": "GAV",
                "anio": 2021,
                "mes": 11,
                "resultado_USDM": 2628.0,
                "resultado_USD_TON": 1314.0
            },
            {
                "concepto": "GAV",
                "anio": 2020,
                "mes": 12,
                "resultado_USDM": 3042.0,
                "resultado_USD_TON": 1521.0
            },
            {
                "concepto": "GAV",
                "anio": 2021,
                "mes": 12,
                "resultado_USDM": 3042.0,
                "resultado_USD_TON": 1521.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2020,
                "mes": 1,
                "resultado_USDM": 3594.0,
                "resultado_USD_TON": 1797.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2021,
                "mes": 1,
                "resultado_USDM": 3594.0,
                "resultado_USD_TON": 1797.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2022,
                "mes": 1,
                "resultado_USDM": 3594.0,
                "resultado_USD_TON": 1797.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2020,
                "mes": 2,
                "resultado_USDM": 2326.0,
                "resultado_USD_TON": 1163.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2021,
                "mes": 2,
                "resultado_USDM": 2326.0,
                "resultado_USD_TON": 1163.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2022,
                "mes": 2,
                "resultado_USDM": 2326.0,
                "resultado_USD_TON": 1163.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2020,
                "mes": 3,
                "resultado_USDM": 3910.0,
                "resultado_USD_TON": 1955.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2021,
                "mes": 3,
                "resultado_USDM": 3910.0,
                "resultado_USD_TON": 1955.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2022,
                "mes": 3,
                "resultado_USDM": 3910.0,
                "resultado_USD_TON": 1955.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2020,
                "mes": 4,
                "resultado_USDM": 3724.0,
                "resultado_USD_TON": 1862.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2021,
                "mes": 4,
                "resultado_USDM": 3724.0,
                "resultado_USD_TON": 1862.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2022,
                "mes": 4,
                "resultado_USDM": 3724.0,
                "resultado_USD_TON": 1862.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2020,
                "mes": 5,
                "resultado_USDM": 3098.0,
                "resultado_USD_TON": 1549.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2021,
                "mes": 5,
                "resultado_USDM": 3098.0,
                "resultado_USD_TON": 1549.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2020,
                "mes": 6,
                "resultado_USDM": 3260.0,
                "resultado_USD_TON": 1630.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2021,
                "mes": 6,
                "resultado_USDM": 3260.0,
                "resultado_USD_TON": 1630.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2020,
                "mes": 7,
                "resultado_USDM": 2144.0,
                "resultado_USD_TON": 1072.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2021,
                "mes": 7,
                "resultado_USDM": 2144.0,
                "resultado_USD_TON": 1072.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2020,
                "mes": 8,
                "resultado_USDM": 1486.0,
                "resultado_USD_TON": 743.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2021,
                "mes": 8,
                "resultado_USDM": 1486.0,
                "resultado_USD_TON": 743.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2020,
                "mes": 9,
                "resultado_USDM": 1720.0,
                "resultado_USD_TON": 860.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2021,
                "mes": 9,
                "resultado_USDM": 1720.0,
                "resultado_USD_TON": 860.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2020,
                "mes": 10,
                "resultado_USDM": 3834.0,
                "resultado_USD_TON": 1917.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2021,
                "mes": 10,
                "resultado_USDM": 3834.0,
                "resultado_USD_TON": 1917.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2020,
                "mes": 11,
                "resultado_USDM": 2628.0,
                "resultado_USD_TON": 1314.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2021,
                "mes": 11,
                "resultado_USDM": 2628.0,
                "resultado_USD_TON": 1314.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2020,
                "mes": 12,
                "resultado_USDM": 3042.0,
                "resultado_USD_TON": 1521.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2021,
                "mes": 12,
                "resultado_USDM": 3042.0,
                "resultado_USD_TON": 1521.0
            }
        ],proyectado:[
            {
                "concepto": "INGRESO",
                "anio": 2022,
                "mes": 5,
                "resultado_USDM": 1792.0,
                "resultado_USD_TON": 896.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2022,
                "mes": 6,
                "resultado_USDM": 3722.0,
                "resultado_USD_TON": 1861.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2022,
                "mes": 7,
                "resultado_USDM": 2278.0,
                "resultado_USD_TON": 1139.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2022,
                "mes": 8,
                "resultado_USDM": 3310.0,
                "resultado_USD_TON": 1655.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2022,
                "mes": 9,
                "resultado_USDM": 1504.0,
                "resultado_USD_TON": 752.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2022,
                "mes": 10,
                "resultado_USDM": 1612.0,
                "resultado_USD_TON": 806.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2022,
                "mes": 11,
                "resultado_USDM": 1816.0,
                "resultado_USD_TON": 908.0
            },
            {
                "concepto": "INGRESO",
                "anio": 2022,
                "mes": 12,
                "resultado_USDM": 3778.0,
                "resultado_USD_TON": 1889.0
            },
            {
                "concepto": "COSTO",
                "anio": 2022,
                "mes": 5,
                "resultado_USDM": 1140.0,
                "resultado_USD_TON": 570.0
            },
            {
                "concepto": "COSTO",
                "anio": 2022,
                "mes": 6,
                "resultado_USDM": 2446.0,
                "resultado_USD_TON": 1223.0
            },
            {
                "concepto": "COSTO",
                "anio": 2022,
                "mes": 7,
                "resultado_USDM": 2548.0,
                "resultado_USD_TON": 1274.0
            },
            {
                "concepto": "COSTO",
                "anio": 2022,
                "mes": 8,
                "resultado_USDM": 2394.0,
                "resultado_USD_TON": 1197.0
            },
            {
                "concepto": "COSTO",
                "anio": 2022,
                "mes": 9,
                "resultado_USDM": 1338.0,
                "resultado_USD_TON": 669.0
            },
            {
                "concepto": "COSTO",
                "anio": 2022,
                "mes": 10,
                "resultado_USDM": 2540.0,
                "resultado_USD_TON": 1270.0
            },
            {
                "concepto": "COSTO",
                "anio": 2022,
                "mes": 11,
                "resultado_USDM": 1000.0,
                "resultado_USD_TON": 500.0
            },
            {
                "concepto": "COSTO",
                "anio": 2022,
                "mes": 12,
                "resultado_USDM": 3582.0,
                "resultado_USD_TON": 1791.0
            },
            {
                "concepto": "GAV",
                "anio": 2022,
                "mes": 5,
                "resultado_USDM": 3098.0,
                "resultado_USD_TON": 1549.0
            },
            {
                "concepto": "GAV",
                "anio": 2022,
                "mes": 6,
                "resultado_USDM": 3260.0,
                "resultado_USD_TON": 1630.0
            },
            {
                "concepto": "GAV",
                "anio": 2022,
                "mes": 7,
                "resultado_USDM": 2144.0,
                "resultado_USD_TON": 1072.0
            },
            {
                "concepto": "GAV",
                "anio": 2022,
                "mes": 8,
                "resultado_USDM": 1486.0,
                "resultado_USD_TON": 743.0
            },
            {
                "concepto": "GAV",
                "anio": 2022,
                "mes": 9,
                "resultado_USDM": 1720.0,
                "resultado_USD_TON": 860.0
            },
            {
                "concepto": "GAV",
                "anio": 2022,
                "mes": 10,
                "resultado_USDM": 3834.0,
                "resultado_USD_TON": 1917.0
            },
            {
                "concepto": "GAV",
                "anio": 2022,
                "mes": 11,
                "resultado_USDM": 2628.0,
                "resultado_USD_TON": 1314.0
            },
            {
                "concepto": "GAV",
                "anio": 2022,
                "mes": 12,
                "resultado_USDM": 3042.0,
                "resultado_USD_TON": 1521.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2022,
                "mes": 5,
                "resultado_USDM": 3098.0,
                "resultado_USD_TON": 1549.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2022,
                "mes": 6,
                "resultado_USDM": 3260.0,
                "resultado_USD_TON": 1630.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2022,
                "mes": 7,
                "resultado_USDM": 2144.0,
                "resultado_USD_TON": 1072.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2022,
                "mes": 8,
                "resultado_USDM": 1486.0,
                "resultado_USD_TON": 743.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2022,
                "mes": 9,
                "resultado_USDM": 1720.0,
                "resultado_USD_TON": 860.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2022,
                "mes": 10,
                "resultado_USDM": 3834.0,
                "resultado_USD_TON": 1917.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2022,
                "mes": 11,
                "resultado_USDM": 2628.0,
                "resultado_USD_TON": 1314.0
            },
            {
                "concepto": "RESULTADO",
                "anio": 2022,
                "mes": 12,
                "resultado_USDM": 3042.0,
                "resultado_USD_TON": 1521.0
            }
        ]};
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
        console.log(res)
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
