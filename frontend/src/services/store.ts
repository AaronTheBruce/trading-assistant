import {configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [...getDefaultMiddleware(), thunk, logger]

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: false,
});

export default store;