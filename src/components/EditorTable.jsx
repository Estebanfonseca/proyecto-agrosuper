import React from "react";
import tableActions from "../redux/actions/tableActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect , useState} from "react";
import variableActions from "../redux/actions/graphicAction";

export default function EditorTable() {
    let dispatch = useDispatch();
    let { getEditor } = tableActions;
    let {variable} = variableActions;
    let { editor } = useSelector((store) => store.tableReducer);
    let [checkedState, setCheckedState] = useState(
        [false,false,false,false]
    );


    useEffect(() => {
        dispatch(getEditor());
        dispatch(variable())
    }, []);
    
let allCheck = checkedState.every((item)=> item === true)

    let handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }

    return (
        <div className="table">
            <table className="table-editor">
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
                                <td><p className={item.status}>!</p></td>
                                <td><button className="edit-btn"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARNJREFUSEvN1mENAjEMBeB3CkACEpAASgAFSACcgAIkYAEpOIC8ZEuW3drrtpK7/SPk9tHXrceAmdYwkwtveB0K+UwV5AkTfQVwD0DFveCIbgP8BqDiXvAVwCWLV8W9YJp3AIcMvwHgjxqtHpjxngFw87hS/AHgKB2yVjjtKbFThvOjiPLLFjg/SDHmFJ+6TdVwCU1jNuM1FWsocbWneQRW2BW19tgdtcCcRE8AG+G0VMWb7qFFTZSzNw7+3G5GtYr/imow3ywr73gtUX8FlPeUk6p7ST0uwW6oFnUOu6IavEuyZL/5bnVd1snliloGiDsYN1xcxdJ1ak1gVGDNdWpFiy2V4OIftA55tN/ietxRnO3RH63uLh+7k92sAAAAAElFTkSuQmCC"/></button></td>
                                <td><input className="checkbox" type='checkbox' id={index} checked={checkedState[index]} onChange={() => handleOnChange(index)}/></td>
                            </tr>
                        ))
                        : <tr></tr>}
                </tbody>
            </table>
            <div className="botones">
                <button className={allCheck?'active':''} onClick={allCheck?()=> alert('Reporte Generado'):null}>Generar Reporte</button>
            </div>
        </div>
    );
}
