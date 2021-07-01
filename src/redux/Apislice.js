import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("users/fetchData", async () => {
    const response = await fetch("https://api-pub.bitfinex.com/v2/ticker/tBTCUSD");
    const users = await response.json();
    console.log(users)
    return users;
  });

const DataSlice = createSlice({
    name:"data",
    initialState:{
        data:[],
    },
    reducers:{

    },
    extraReducers: {
        [fetchData.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchData.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = [...state.data, ...action.payload];
        },
        [fetchData.rejected]: (state, action) => {
            state.loading = false;
        },
    }
});

export const {} =DataSlice.actions;

export default DataSlice.reducer;