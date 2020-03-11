import { createSlice } from '@reduxjs/toolkit';
import authReducers from './authReducers';

const initialState = {
    token: null,
    expires: null,
    role: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: authReducers
});

export const {logout, initApp, login} = authSlice.actions;

export default authSlice.reducer;
