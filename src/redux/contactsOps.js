import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// get base url
// for all questions of axios

axios.defaults.baseURL = "https://mockapi.io/projects/6806a3bce81df7060eb7c471";


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
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (text, thunkAPI) => {
    try {
      const response = await axios.delete("/contacts", { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)