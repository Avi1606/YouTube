import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        showMenu: false
    },
    reducers: {
        toggleMenu: (state) => (
            state.showMenu = !state.showMenu
        ),
    },

});

export const {toggleMenu} = appSlice.actions;

export default appSlice.reducer;