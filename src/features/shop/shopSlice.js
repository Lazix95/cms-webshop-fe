import { createSlice } from '@reduxjs/toolkit';
import shopReducers from './shopReducers';

const initialState = {};

const shopSlice = createSlice({
   name: 'shop',
   initialState,
   reducers: shopReducers
});
export const { fetchShop } = shopSlice.actions;

export default shopSlice;
