import {configureStore} from '@reduxjs/toolkit';
import {useDispatch as useReduxDispatch} from 'react-redux';
import loggerMiddleware from 'redux-logger';
import {reducer} from './reducers';

export const store = configureStore({
  reducer,
  middleware: (middlewares) => middlewares().concat(loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export const useDispatch = () => useReduxDispatch<Dispatch>();
