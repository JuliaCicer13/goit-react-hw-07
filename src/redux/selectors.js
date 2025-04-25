import {createSelector} from '@reduxjs/toolkit';
import { selectorContacts } from './contactsSlice';
import {selectNameFilter} from './filterSlice';

export const selectFilteredContacts = createSelector(
  [selectorContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact )=>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  }
)