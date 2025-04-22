import { createSlice } from '@reduxjs/toolkit';
// import operation
import { fetchContacts, addContact, deleteContact} from "./contactsOps";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [], 
    isLoading: false,
    error: null,
  },  
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state)=> {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
       state.isLoading = false;
       state.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload.id);
      });
   },
});


export default contactSlice.reducer;

export const selectorContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
