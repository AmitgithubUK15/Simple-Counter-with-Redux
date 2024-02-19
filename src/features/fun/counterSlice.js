import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   counter:0,
   increby10:0
}

export const counteraction = createSlice({
    name:"Numbercounter",
    initialState,
    reducers:{
        increament: (state)=>{
            state.counter +=1,
            state.increby10 +=10
        },
        decreament:(state)=>{
            state.counter -=1,
            state.increby10 -=10
        }
    }
})

export const {increament,decreament} = counteraction.actions
export default counteraction.reducer