import { createSlice } from '@reduxjs/toolkit';

export const Filter = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterSlice: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { filterSlice } = Filter.actions;