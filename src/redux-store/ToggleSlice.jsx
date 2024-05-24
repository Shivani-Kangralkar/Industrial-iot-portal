import { createSlice } from "@reduxjs/toolkit"


const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        isMenuOpen: true,
        isSidebarOpen: false
    },
    reducers:{
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        sidebarOpen : (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
        },
        sidebarClose: (state) => {
            state.isSidebarOpen = false;
        },
        close:(state) => {
          state.isMenuOpen = false;
        }
    }
});



export const { toggleMenu, close, sidebarOpen, sidebarClose} = toggleSlice.actions
export default toggleSlice.reducer;
