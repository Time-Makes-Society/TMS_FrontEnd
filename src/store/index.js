import React from 'react'
import {createSlice,configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';

const store = configureStore({
    reducer : {auth: authReducer}
});

export default store;