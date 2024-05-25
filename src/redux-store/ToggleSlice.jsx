import { createSlice } from "@reduxjs/toolkit"


const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        isMenuOpen: false
    },
    reducers:{
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        close:(state) => {
          state.isMenuOpen = false;
        }
    }
});



export const { toggleMenu, close} = toggleSlice.actions
export default toggleSlice.reducer;
