import React from 'react';
import {createSlice,configureStore} from '@reduxjs/toolkit';

const initialTimerState = {
    timer:0
}

const timerSlice = createSlice({
    name:'Timer',
    initialState:initialTimerState,
    reducers:{
        timer(state,action){
            
        }
    }
})

export const timerActions = timerSlice.actions;
export default timerSlice.reducer;