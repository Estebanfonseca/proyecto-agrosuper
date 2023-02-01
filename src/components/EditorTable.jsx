import React from "react";
import tableActions from "../redux/actions/tableActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function EditorTable() {
    let dispatch = useDispatch();
    let { getEditor } = tableActions;
    let { editor } = useSelector((store) => store.tableReducer);

    useEffect(() => {
        dispatch(getEditor());
    }, []);
    console.log(editor);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>variable</th>
                        <th>Anterior</th>
                        <th>Actual</th>
                        <th>Variacion %</th>
                        <th>Status</th>
                        <th>Editar var</th>
                        <th>Ok</th>
                    </tr>
                </thead>
                <tbody>
                    {editor.length > 0
                        ? editor.map((item,index) => (
                            <tr key={index}>
                                <th>{item.nombre_var}</th>
                                <td>{item.anterior}</td>
                                <td>{item.actual}</td>
                                <td>{item.variacion_porc}</td>
                                <td><p className={item.status}>1</p></td>
                                <td><button>Editar</button></td>
                                <td><input type='checkbox'/></td>
                            </tr>
                        ))
                        : <tr></tr>}
                </tbody>
            </table>
        </div>
    );
}
