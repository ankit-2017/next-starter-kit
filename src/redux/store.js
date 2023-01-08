import { configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import rootReducer from './rootReducer';
import loggerMiddleware from './middlewares/logger';

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

const bindMiddleware = (middleware) => {
  const array = [...middleware()];
  if (process.env.NODE_ENV === 'development') {
    array.push(loggerMiddleware);
  }
  return array;
};

export const makeStore = () => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => bindMiddleware(getDefaultMiddleware),
  });
  return store;
};
export const wrapper = createWrapper(makeStore);
