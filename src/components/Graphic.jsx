import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

export default function Graphic({texto,datos1,datos2,usd,datosX,datosY1,datosY2}) {
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
            }
        },
        scales: {
            y: {
                type: "linear",
                display: true,
                position: "left",
                min: 0,
                max:datosX? 13 : 5000
            },
        },
    };


    let labels;
    let datasets;
    let datos3 = [undefined,undefined,undefined,undefined]
    datosX?
    labels = datosX.map(item=>item):
    labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    datosY1? 
    datasets = [
        {
            label: "Real",
                data: datosY1.map((item) => item),
                borderColor: "#003087",
                backgroundColor: "#003087",
                yAxisID: "y",
        },
        {
            label: "Proyectado",
            data:  datosY2.map((item)=>item),
            borderColor: "#e87722",
            backgroundColor: "#e87722",
        },
    ] 
    : datasets = [
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
    ]


    const data = {
        labels, 
        datasets
    };
    

    return (
        <div>
            <Line options={options} data={data} />
            {datosX? '' : <h4>meses</h4>}
        </div>
    );
}
