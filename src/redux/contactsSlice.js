import { createSlice } from '@reduxjs/toolkit';
// import operation
import { fetchContacts, addContact, deleteContact, toggleCompleted } from "./contactsOps";

export const selectContactCount = state => {
  const contacts = selectContacts(state);

  return contacts.reduce(
    (count, contacts) => {
      if (contacts.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
};

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

const handlePending = state => {
  state.isLoading = true;
}
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      {id: 1, name: "Rosie Simpson", number: "459-12-56"},
      {id: 2, name: "Hermione Kline", number: "443-89-1" },
      {id: 3, name: "Eden Clements",number: "645 - 17 - 79"},
      {id: 4, name: "Annie Copeland", number: "227-91-26" }
    ], 
    isLoading: false,
    error: null,
  },
  // Add the uploiding extra actions
  
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.filter(
          (task) => task.id !== action.payload.id
        )
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map((task) => 
          task.id === action.payload.id ? action.payload : task
        );
      })
      
      .addCase(toggleCompleted.rejected, handleRejected);
  },
});

export default slice.reducer;
