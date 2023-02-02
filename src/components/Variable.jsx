import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Graphic from "./Graphic";
import variableActions from "../redux/actions/graphicAction";

export default function Variable() {
    let dispatch = useDispatch();
    let { variable } = variableActions;
    let { variableEjeX, variableEjeY, variableEjeY2, deslizante, afectadas } = useSelector((store) => store.variableReducer);
    let [valor, setValor] = useState(0);

    useEffect(() => {
        dispatch(variable());
    }, []);


    return (
        <div className="container-editor">
            <div className="variable-grafico">
                <Graphic texto={"Variable 1"} datosX={variableEjeX} datosY1={variableEjeY} datosY2={variableEjeY2} />
            </div>
            <div>
                <form>
                    <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} />
                    <input type="range" min={deslizante.min} max={deslizante.max} value={valor} onChange={(e) => setValor(e.target.value)} />
                </form>
            </div>
            <table>
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
                        <td>{afectadas.vta_int}</td>
                        <td>{(afectadas.vta_int - afectadas.vta_int) / 100}%</td>
                    </tr>
                    <tr>
                        <th>Venta Nac.</th>
                        <td>{afectadas.vta_nac}</td>
                        <td>{afectadas.vta_nac}</td>
                        <td>{(afectadas.vta_nac - afectadas.vta_nac) / 100}%</td>
                    </tr>
                    <tr>
                        <th>rop</th>
                        <td>{afectadas.ingreso}</td>
                        <td>{afectadas.ingreso}</td>
                        <td>{(afectadas.ingreso - afectadas.ingreso) / 100}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
