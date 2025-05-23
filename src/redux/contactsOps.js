import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// get base url
// for all questions of axios

axios.defaults.baseURL = "https://6806a3bce81df7060eb7c470.mockapi.io";


// call async operation

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
  async (_, thunkAPI) => {
  try {
  
    // HTTP
    const response = await axios.get("/contacts");
    return response.data;
  // This is all will be returned if everything is fine

  } catch (e) {
    // in the error case we can updating it here
    return thunkAPI.rejectWithValue(e.message);
  }
  });

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({name, number }, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, number });
      return response.data;
    } catch (e) {;
      return thunkAPI.rejectWithValue(e.message)
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)