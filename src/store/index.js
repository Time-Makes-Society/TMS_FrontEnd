import React from 'react'
import {createSlice,configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';
import loginReducer from './Login';

const store = configureStore({
    reducer : {
        auth: authReducer,login:loginReducer}
});

export default store;