import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/fun/counterSlice';
// import valueReducer from '../features/fun/increaBy10';

export const store = configureStore({
    reducer:counterReducer,
});