import { createSlice } from '@reduxjs/toolkit'
import defaultReducers from "./defaultReducers";

const initialState = {
  config: null
};

const defaultSlice = createSlice({
    name: 'default',
    initialState,
    reducers: defaultReducers
});

export const { initApp } = defaultSlice.actions;

export default defaultSlice.reducer;
