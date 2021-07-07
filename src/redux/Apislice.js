import {createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name:"data",
    initialState:{
        listings:[],
    },
    reducers:{
        
    },
    extraReducers: {

    }
});

// export const {} =DataSlice.actions;

export default DataSlice.reducer;