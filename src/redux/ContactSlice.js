import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const directory = [
    { id: 'id-1', name: 'Rosie Simpson', number: '444-33-55' },
    { id: 'id-2', name: 'Hermione Kline', number: '777-88-22' },
    { id: 'id-3', name: 'Eden Clements', number: '888-17-44' },
    { id: 'id-4', name: 'Ann Klodme', number: '123-45-67' },
    { id: 'id-5', name: 'Ema Golovko', number: '999-44-55' },
];

const ContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    directory,
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.directory.push(payload);
    },

    removeContact: (state, { payload }) => {
      state.directory = state.directory.filter(
        contact => contact.id !== payload
      );
    },
  },
});

export const persistedReducer = persistReducer(
  persistConfig,
  ContactSlice.reducer
);

export const { addContact, removeContact } = ContactSlice.actions;