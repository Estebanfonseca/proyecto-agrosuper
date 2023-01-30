import { createAction } from "@reduxjs/toolkit";

const filterAnio = createAction('filterAnio',(anio)=>{
    return {
        payload:{
            anio: anio
        }
    }
})
const filterUsd = createAction('filterUsd',(usd)=>{
    return{
        payload:{
            usd:usd
        }
    }
})

const filterActions = {
    filterAnio,
    filterUsd
}

export default filterActions