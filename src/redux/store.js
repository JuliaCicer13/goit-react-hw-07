import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from "./contactsSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

