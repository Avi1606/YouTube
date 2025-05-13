import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        showMenu: false
    },
    reducers: {
        toggleMenu: (state) => {(
            state.showMenu = !state.showMenu
        )},
        closeMenu: (state) => {
            state.showMenu = false;
        }
    },

});

export const {toggleMenu,closeMenu} = appSlice.actions;

export default appSlice.reducer;