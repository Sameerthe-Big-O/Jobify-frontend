// store.js

import { configureStore } from '@reduxjs/toolkit';
import DarkSlice from '../feature/DarkSlice';
import authSlice from '../feature/authSlice';

const store = configureStore({
  reducer: {
    darkMode: DarkSlice,
    auth:authSlice,
    // Add other reducers here if needed
  },
});

export default store;


