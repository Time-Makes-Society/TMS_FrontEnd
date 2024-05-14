import { createSlice } from "@reduxjs/toolkit"
const getTime = localStorage.getItem('readTime')
const initialState={
    time: 0,
}

const feedCountSlice = createSlice({
    name:'feedCount',
    initialState:initialState,
    reducers:{
        readTime(state,action){
            state.time += action.payload
            localStorage.setItem('readTime',state.time)
        }
    }
})