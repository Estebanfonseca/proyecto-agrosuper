import React from "react";
import { useDispatch, useSelector } from "react-redux";
import variableActions from "../redux/actions/variableAction";
import { useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

export default function Main() {
    let dispatch = useDispatch();
    let { getGraphic } = variableActions;
    let { proyectado, real } = useSelector((store) => store.variableReducer);

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    const options = {
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: "Chart.js Line Chart - Multi Axis",
            },
        },
        scales: {
            y: {
                type: "linear",
                display: true,
                position: "left",
            },
            y1: {
                type: "linear",
                display: false,
                position: "right",
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };

    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const data = {
        labels,
        datasets: [
            {
                label: "Real",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: "#003087",
                backgroundColor: "#003087",
                yAxisID: "y",
            },
            {
                label: "Proyectado",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: "#e87722",
                backgroundColor: "#e87722",
                yAxisID: "y1",
            },
        ],
    };

    useEffect(() => {
        dispatch(getGraphic());
    }, []);

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
