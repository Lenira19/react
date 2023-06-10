import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { items: [], loading: "start" };

export const fetchCatalog = createAsyncThunk(

    "catalog/getCatalog",
    async () => {
        return axios
            .get("/data/menu.json")
            .then((r) => r.data);
    });


export const catalogSlice = createSlice({
    name: "catalog",

    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCatalog.fulfilled, (state, action) => {
          state.loading = "fulfilled";
          state.items.length = 0;
          state.items.push(...action.payload);
        });
        builder.addCase(fetchCatalog.pending, (state, action) => {
          state.loading = "pending";
        });
        builder.addCase(fetchCatalog.rejected, (state, action) => {
          state.loading = "rejected";
        });
      },


});

// Action creators are generated for each case reducer function
//export const {  } =
// cartSlice.actions;

export default catalogSlice.reducer;