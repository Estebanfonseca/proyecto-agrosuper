import React from "react";
import { useDispatch, useSelector } from "react-redux";
import variableActions from "../redux/actions/variableAction";
import { useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";


export default function Main() {
    let dispatch = useDispatch();
    let { getGraphic } = variableActions;
    let { proyectado, real } = useSelector((store) => store.variableReducer);

    useEffect(() => {
        dispatch(getGraphic());
    }, []);

    let ingresoReal = [...real.filter((item) => item.concepto === "INGRESO")];
    ingresoReal = ingresoReal.filter((item) => item.anio === 2022);
    console.log(ingresoReal);
    let ingresoProyect = [...proyectado.filter((item) => item.concepto === "INGRESO")];
    console.log(ingresoProyect);

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    const options = {
        responsive: true,
        interaction: {
            mode: "index",
            intersect: true,
        },
        stacked: true,
        plugins: {
            title: {
                display: true,
                text: "INGRESO",
            },
        },
        scales: {
            y: {
                type: "linear",
                display: true,
                position: "left",
                min: 0,
            },
            y1: {
                type: "linear",
                display: false,
                position: "right",
                min: 0,
            },
            
        },
    };

    let labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const data = {
        labels,
        datasets: [
            {
                label: "Real",
                data: ingresoReal.map((item) => item.resultado_USDM),
                borderColor: "#003087",
                backgroundColor: "#003087",
                yAxisID: "y",
            },
            {
                label: "Proyectado",
                data: ingresoReal.map((item) => item.resultado_USDM).concat(ingresoProyect.map((item) => item.resultado_USDM)),
                borderColor: "#e87722",
                backgroundColor: "#e87722",
            },
        ],
    };

    return (
        <div className="graficos">
            <div>
                <Line options={options} data={data} />
            </div>
            <div>
                <Line options={options} data={data} />
            </div>
            <div>
                <Line options={options} data={data} />
            </div>
            <div>
                <Line options={options} data={data} />
            </div>
        </div>
    );
}
