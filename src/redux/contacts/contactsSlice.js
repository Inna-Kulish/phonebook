import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledFetch = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
};

const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.items.push(action.payload);
  state.error = null;
};

const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), handlePending)
    .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), handleRejected)
  },
});

export const contactsReducer = contactsSlice.reducer;