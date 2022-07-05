import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {},
});

export const exampleReducer = exampleSlice.reducer;
export const exampleActions = { ...exampleSlice.actions };
