import { createSlice } from '@reduxjs/toolkit';

export const Filter = createSlice({
  name: 'filter',

  initialState: {
    filter: '',
  },

  reducers: {
    filterSlice: {
      reducer: (state, action) => {
        state.filter = action.payload;
      },
    },
    prepare: payload => ({ payload }),
  },
});

export const { filterSlice } = Filter.actions;
