import React from "react";
import { useDispatch, useSelector } from "react-redux";
import variableActions from "../redux/actions/graphicAction";
import { useEffect, useRef, useState } from "react";
import Graphic from "./Graphic";
import filterActions from "../redux/actions/filterActions";

export default function MainGraphic() {
    let dispatch = useDispatch();
    let { getGraphic } = variableActions;
    let { filterAnio,filterUsd } = filterActions;
    let { proyectado, real } = useSelector((store) => store.variableReducer);
    let { anio,usd } = useSelector((store) => store.filterReducer);
    let anioRef = useRef(null);
    let [check,setCheck] = useState(true)

    useEffect(() => {
        dispatch(getGraphic());
    }, []);


    let ingresoReal = [...real.filter((item) => item.concepto === "INGRESO")];
    ingresoReal = ingresoReal.filter((item) => item.anio === anio);

    let costoReal = [...real.filter((item) => item.concepto === "COSTO")];
    costoReal = costoReal.filter((item) => item.anio === anio);

    let resultadoReal = [...real.filter((item) => item.concepto === "RESULTADO")];
    resultadoReal = resultadoReal.filter((item) => item.anio === anio);

    let gavReal = [...real.filter((item) => item.concepto === "GAV")];
    gavReal = gavReal.filter((item) => item.anio === anio);

    let ingresoProyect = [...proyectado.filter((item) => item.concepto === "INGRESO")];
    ingresoProyect = ingresoProyect.filter((item) => item.anio === anio);

    let costoProyect = [...proyectado.filter((item) => item.concepto === "COSTO")];
    costoProyect = costoProyect.filter((item) => item.anio === anio);

    let gavProyect = [...proyectado.filter((item) => item.concepto === "GAV")];
    gavProyect = gavProyect.filter((item) => item.anio === anio);

    let resultadoProyect = [...proyectado.filter((item) => item.concepto === "RESULTADO")];
    resultadoProyect = resultadoProyect.filter((item) => item.anio === anio);

    let hand = () => {
        let anio = parseInt(anioRef.current.value);
        dispatch(filterAnio(anio));
    };
    let checkUsd = (e)=>{

        dispatch(filterUsd(e.target.value))
    }

    return (
        <div  className="main">
            <div className="graficos">
                <Graphic datos1={ingresoReal} datos2={ingresoProyect} texto={"INGRESO - " + anio} usd={usd}/>
                <Graphic datos1={costoReal} datos2={costoProyect} texto={"COSTO - " + anio} usd={usd}/>
                <Graphic datos1={gavReal} datos2={gavProyect} texto={"GAV - " + anio} usd={usd}/>
                <Graphic datos1={resultadoReal} datos2={resultadoProyect} texto={"RESULTADO - " + anio} usd={usd}/>
            </div>
            <div className="filter">
                <h2>Filtros</h2>
                <form className="w-100 flex j-evenly mb-3 ">
                    <h3>filtrar por año</h3>
                    <select  ref={anioRef} value={filterAnio.anio} name="Select" onChange={hand}>
                        <option value={2022}>2022</option>
                        <option value={2021}>2021</option>
                        <option value={2020}>2020</option>
                    </select>
                    <h3>filtrar por unidad</h3>
                    <label>
                        <input type='checkbox' className="checkbox" checked={check} onClick={checkUsd} value='resultado_USDM' onChange={()=>setCheck(!check)}/>USDM
                    </label>
                    <label>
                        <input type='checkbox' className="checkbox"  checked={!check} onClick={checkUsd}  value='resultado_USD_TON' onChange={()=>setCheck(!check)} />USD TON
                    </label>
                </form>
            </div>
        </div>
    );
}
