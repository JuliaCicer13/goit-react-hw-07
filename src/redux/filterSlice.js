import { createSlice } from '@reduxjs/toolkit';
import { selectNameFilter } from "../redux/filterSlice";


export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;


export const selectNameFilter = state => {
  
  const contacts = selectContacts(state);
  const statusFilter = selectNameFilter(state);
  
  switch (statusFilter) {
    case "active":
      return contacts.filter(contacts => !contacts.completed);
    case "completed":
      return contacts.filter(contacts => contacts.completed);
    default:
      return contacts;  
  }
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: "",
  },
  reducers: {
    setStatusFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
