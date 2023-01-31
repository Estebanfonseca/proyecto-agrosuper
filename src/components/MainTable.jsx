import React from "react";
import tableActions from "../redux/actions/tableActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import textoActions from "../redux/actions/textareaAction";

export default function MainTable() {
    let dispatch = useDispatch();
    let { table } = useSelector((store) => store.tableReducer);
    let {text} = useSelector(store => store.textoReducer)
    let { getTable } = tableActions;
    let {textoArea} = textoActions

    useEffect(() => {
        dispatch(getTable());
    }, []);

    let textNew = (e)=>{
        dispatch(textoArea(e.target.value))
    }
console.log(text)
    return (
        <div className="table">
            <table className="table-variable">
                <thead>
                    <tr>
                        <th>sector</th>
                        <th>Sem Ant.</th>
                        <th>Sem Act.</th>
                        <th>Variacion %</th>
                        <th>Ventas</th>
                        <th>Costo Ventas</th>
                        <th>GAV</th>
                        <th>Total Ton</th>
                        <th>Vol. Nacional</th>
                        <th>Vol. Export</th>
                    </tr>
                </thead>
                <tbody>
                    {table.length > 0 ? table.map((item) => 
                        <tr key={item.nro}>
                            <th>{item.linea}</th>
                            <td>{Math.trunc(item.ropSemAnt)}</td>
                            <td>{Math.trunc(item.ropSemActual)}</td>
                            <td>{Math.trunc(item.rop)}</td>
                            <td>{Math.trunc(item.ventas)}</td>
                            <td>{Math.trunc(item.costoVentas)}</td>
                            <td>{Math.trunc(item.GAV)}</td>
                            <td>{Math.trunc(item.toneladasTotal)}</td>
                            <td>{Math.trunc(item.volNacional)}</td>
                            <td>{Math.trunc(item.volExport)}</td>
                        </tr>
                    ):<tr></tr>}
                </tbody>
            </table>
            <h2>Explicación</h2>
            <textarea cols="50" rows="10" value={text} onChange={textNew}></textarea>
        </div>
    );
}
