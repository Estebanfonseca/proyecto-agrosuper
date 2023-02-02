import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Graphic from "./Graphic";
import variableActions from "../redux/actions/graphicAction";
import valorActions from "../redux/actions/valorActions";

export default function Variable() {
    let dispatch = useDispatch();
    let { variable } = variableActions;
    let { variableEjeX, variableEjeY, variableEjeY2, deslizante, afectadas } = useSelector((store) => store.variableReducer);
    let [valor, setValor] = useState(deslizante.min);
    let {probarValor} = valorActions
    let {nuevoValor} = useSelector(store=>store.valorReducer)
    let [afectada,setAfectada] = useState([afectadas.vta_int,afectadas.vta_nac,afectadas.ingreso])


    let valorAprobar = (item) =>{
        dispatch(probarValor(parseInt(item)))
    }

    let probarNuevoValor=()=>{
        let nuevo = nuevoValor.map((item)=> item.var_afectada_value)
        setAfectada(nuevo)
    }
    

    return (
        <div className="container-editor">
            <div className="variable-grafico">
                <Graphic texto={"Variable 1"} datosX={variableEjeX} datosY1={variableEjeY} datosY2={variableEjeY2} />
            </div>
            <table className="table-variable-1">
                <thead>
                    <tr>
                        <th>variable</th>
                        <th>valor original</th>
                        <th>valor afectado</th>
                        <th>variacion %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Venta Int.</th>
                        <td>{afectadas.vta_int}</td>
                        <td>{afectada[0]}</td>
                        <td>{(( afectada[0] - afectadas.vta_int)*100 )/ afectadas.vta_int}%</td>
                    </tr>
                    <tr>
                        <th>Venta Nac.</th>
                        <td>{afectadas.vta_nac}</td>
                        <td>{afectada[1]}</td>
                        <td>{((afectada[1] - afectadas.vta_nac) *100)/ afectadas.vta_nac}%</td>
                    </tr>
                    <tr>
                        <th>rop</th>
                        <td>{afectadas.ingreso}</td>
                        <td>{afectada[2]}</td>
                        <td>{(((afectada[2] - afectadas.ingreso)*100) / afectadas.ingreso).toFixed(2)}%</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={()=>probarNuevoValor()} >Probar valor</button>
                <form className="form-variable">
                    <h2>Variable 1</h2>
                    <input type="text" value={valor} onChange={(e)=>setValor(e.target.value) } onKeyUp={()=>valorAprobar(valor)} />
                    <input type="range" min={deslizante.min} max={deslizante.max} value={valor} onChange={(e) => {setValor(e.target.value);valorAprobar(valor)}} onMouseOut={()=>valorAprobar(valor)}/>
                </form>
            <button>Guardar Valor</button>
        </div>
    );
}
