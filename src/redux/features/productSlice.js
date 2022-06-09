import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const axios = require('axios');

const PRODUCT_URL = 'http://localhost:5000/api/products';

export const getProducts = createAsyncThunk('products/getProducts', async()=>{
    const response = await axios.get(PRODUCT_URL);
    const data = await response.data.data;
    console.log(data)
    return {data};
})


export const productSlice = createSlice({ 
    name:'products',
    initialState:{
        products:[],
        status:''
    },
    reducers:{
    },
    extraReducers: builder => {
        builder
        .addCase(getProducts.fulfilled,(state, action)=>{
            state.status = 'idle'
            state.products = action.payload.data;
            console.log(state.products)
        })
        .addCase(getProducts.pending, (state, action)=>{
            state.status = 'loading';
        })
    }
});

export const allProducts = state => state.products.products;
export const filterSize = (state, size)=>{
    if(!size){
        return state.products.products;
    }else if(size){
        return state.products.products.filter(p => p.sizes.includes(size));
        
    }
}


export default productSlice.reducer;