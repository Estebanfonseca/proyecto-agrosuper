import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

export default function Graphic({texto,datos1,datos2,usd}) {
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
                text: texto,
            },
            subtitle: {
                display: true,
                text: 'Custom Chart Subtitle'
            }
        },
        scales: {
            y: {
                type: "linear",
                display: true,
                position: "left",
                min: 0,
                max:5000
            },
        },
    };

    let datos3 = [undefined,undefined,undefined,undefined]

    let labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const data = {
        labels, 
        datasets: [
            {
                label: "Real",
                data: datos1.map((item) => usd === 'resultado_USDM'? item.resultado_USDM:item.resultado_USD_TON),
                borderColor: "#003087",
                backgroundColor: "#003087",
                yAxisID: "y",
            }, 
            {
                label: "Proyectado",
                data:  datos3.map((item)=>item).concat(datos2.map((item) => usd === 'resultado_USDM'? item.resultado_USDM:item.resultado_USD_TON)),
                borderColor: "#e87722",
                backgroundColor: "#e87722",
            },
        ],
    };
    

    return (
        <div>
            <Line options={options} data={data} />
            <h4>meses</h4>
        </div>
    );
}
