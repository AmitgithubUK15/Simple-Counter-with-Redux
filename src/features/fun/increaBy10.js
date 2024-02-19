import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}

export const incres10 = createSlice({
   name:"incre10",
    initialState,
    reducers:{
        incres10by: (state)=>{
          state.value += 10
        },
        decre10by: (state)=>{
            state.value -=10
        }
    }
})