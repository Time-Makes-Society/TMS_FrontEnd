import React from 'react';
import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react';

const initialLoginState = {
    loginId:'',
    password:'',
    memberName:'',
};
const loginSlice = createSlice({
    name:'Login',
    initialState:initialLoginState,
    reducers:{
        login(state,action){  
            const {loginId, password, memberName} = action.payload 
            state.loginId=loginId,
            state.password=password,
            state.memberName=memberName

        },
        logout(state){
            state.loginId='',
            state.password='',
            state.memberName-''
        }
    }
})

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;