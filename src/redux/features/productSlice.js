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

// export const filterSize = (state, size) => {
//     console.log(size)
//     if(!size){
//         return state.products.products;
//     }else{
//         console.log(state.products.products.filter(product => product.sizes.includes(size)))
//         return state.products.products.filter(product => product.sizes.includes(size));
//     }
// }

export const filterProducts = (state, size, sort) => {
    let products =  [...state.products.products];
    if(!size){
        if(sort === 'latest'){
            return products.sort((a,b)=> a.updatedAt - b.updatedAt);
        }else if(sort === 'lowest'){
            return products.sort((a,b)=> a.price - b.price);
        }else {
            return products.sort((a,b)=> b.price - a.price);
        }
    }else if(size){
        products = state.products.products.filter(product => product.sizes.includes(size));
        if(sort === 'latest'){
            return products.sort((a,b)=> a.updatedAt - b.updatedAt);
        }else if(sort === 'lowest'){
            return products.sort((a,b)=> a.price - b.price);
        }else {
            return products.sort((a,b)=> b.price - a.price);
        }
    }
}

// export const sortProducts = (state, sort) =>{
//     const products =  [...state.products.products];
//     if(sort === 'latest'){
//         return products.sort((a,b)=> a.updatedAt - b.updatedAt);
//     }else if(sort === 'lowest'){
//         return products.sort((a,b)=> a.price - b.price);
//     }else {
//         return products.sort((a,b)=> b.price - a.price);
//     }
// }


export default productSlice.reducer;