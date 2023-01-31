import { createReducer } from "@reduxjs/toolkit";
import textoActions from "../actions/textareaAction";

const initialState = {
    text: "Aqui puede escribir su explicación acerca de esta tabla          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed suscipit sapien. Nulla tempor mauris in ipsum tempor, non ornare eros tempor. Vestibulum vitae nunc quis mi convallis congue in convallis enim. Aenean efficitur lacus ultrices placerat ornare. Quisque interdum quam ac sapien ornare, ut vestibulum ipsum aliquam. Vivamus est nisl, molestie eu diam eget, condimentum porta mauris. Morbi in faucibus est, ut euismod lacus. Aliquam sed tincidunt mauris. Vestibulum quis egestas magna, pulvinar consequat nibh. Donec ac elementum libero, sit amet interdum lacus. In porttitor velit ac velit elementum facilisis. ",
};

const textoReducer = createReducer(initialState, (texto) => {
    texto.addCase(textoActions.textoArea, (state, action) => {
        return {
            ...state,
            ...action.payload,
        };
    });
});

export default textoReducer;
