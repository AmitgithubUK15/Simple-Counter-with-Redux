import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   counter:0,
   increby10:0,
   showdata:"",
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
        },
        userbio:(state,action) =>{
            const text = {
                val:action.payload
            }
            state.showdata = `hii, my name is ${text.val}`;
        }
    }
})

export const {increament,decreament , userbio} = counteraction.actions
export default counteraction.reducer