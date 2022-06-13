import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const axios = require('axios');

const ORDER_URL = 'http://localhost:5000/api/orders';

export const createOrders = createAsyncThunk('orders/createOrders', async info =>{
    const response = await axios.post(ORDER_URL, info);
    const data = await response.data.data;
    return {data}
});

export const orderSlice = createSlice({
    name: 'orders',
    initialState:{},
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(createOrders.fulfilled, (state, action)=>{
            state.order = action.payload.data;
        })
    }
})

export const showOrder = state => state.orders.order


export default orderSlice.reducer;