import { createSlice } from "@reduxjs/toolkit";
const initialState={
    location:"Jaipur"
}

const locationSlice=createSlice({
    name:"locaiton",
    initialState,
    reducers:{
        setlocation:(state,action)=>{
            if(action.payload!=state.location)
            {
                state.location=action.payload;
            }
        }
    }   
});

export const {setlocation}=locationSlice.actions;
export default locationSlice;