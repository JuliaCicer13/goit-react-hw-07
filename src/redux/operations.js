import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// get base url
// for all questions of axios

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";


// call async operation

export const fetchTasks = createAsyncThunk("tasks/fetchAll",
  async (_, thunkAPI) => {
  try {
  
    // HTTP
    const response = await axios.get("/tasks");
    return response.data;
  // This is all will be returned if everything is fine

  } catch (e) {
    // in the error case we can updating it here
    return thunkAPI.rejectWithValue(e.message);
  }
  });

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
);