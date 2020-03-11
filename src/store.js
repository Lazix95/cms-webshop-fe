import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// Slices
import authSlice from 'features/auth/authSlice';
import storeSlice from 'features/shop/shopSlice';
import defaultSlice from 'features/default/defaultSlice';

const combinedReducers = combineReducers({
    auth: authSlice,
    store: storeSlice,
    default: defaultSlice,
});

const store = configureStore({
    reducer: combinedReducers,
});

export default store;


