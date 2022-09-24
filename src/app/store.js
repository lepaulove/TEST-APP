import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../State/UserSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
});
