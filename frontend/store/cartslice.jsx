import {createSlice} from "@reduxjs/toolkit"
const initialState={
    cartuser:[]
}

const cartSlice=createSlice({
    name:"cartuser",
    initialState,
    reducers:{
        addtocart:(state,action)=>{
            const item=action.payload
            const array=state.cartuser
            let t=0
            array.forEach((e)=>{
                if(e.id===action.payload.id)
                {
                    t=1
                    e.quantity+=1
                }
            })
            if(t==0)
                array.push(item)
        },

        removefromcart:(state,action)=>{
            const array=state.cartuser
            for (let i = 0; i < array.length; i++) {
                if(array[i].id===action.payload.id)
                {
                    array.splice(i,1);
                    break
                }
            }
        }
    }
}) 

export  const {addtocart,removefromcart} =cartSlice.actions
export default cartSlice

