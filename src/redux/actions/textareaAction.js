import { createAction } from "@reduxjs/toolkit";

const textoArea = createAction('textoArea',(texto)=>{
    return {
        payload:{
            text:texto
        }
    }
})

const textoActions = {
    textoArea
}

export default textoActions;