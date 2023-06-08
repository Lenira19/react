import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const loadMenu = createAsyncThunk(
    "menu/getMenu",
    async () => {
        return axios
            .get("/data/menu.json"
                .then((r) => r.data));

    }


);


const initialState = {items:[],loading:"start"};

export const menuSlice = createSlice({
    name: "menu",
    //initialState: cartStorageString
    // ? JSON.parse(cartStorageString)
    //  : initialState,
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadMenu.fulfilled, (state, action) => {
    
            state.loading = "fulfilled";
            state.items.length = 0;
            state.items.push(...action.payload);
        });
        builder.addCase(loadMenu.pending, (state, action) => {
            state.loading = "pending";
        });
        builder.addCase(loadMenu.rejected, (state, action) => {
            state.loading = "rejected";
        });
    },
});

// Action creators are generated for each case reducer function
//export const {  } =
// cartSlice.actions;

export default menuSlice.reducer;