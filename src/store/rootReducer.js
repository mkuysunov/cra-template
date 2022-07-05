import { configureStore } from '@reduxjs/toolkit';
import { exampleReducer } from './example/example.slice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});
