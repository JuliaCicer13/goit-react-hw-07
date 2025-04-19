import { createSlice } from '@reduxjs/toolkit';
// import operation
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";



export const selectTasks = (state) => state.tasks.items;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectError = (state) => state.tasks.error;

const handlePending = state => {
  state.isLoading = true;
}
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Add the uploiding extra actions
  
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.filter(
          (task) => task.id !== action.payload.id
        )
      })
      .addCase(deleteTask.rejected, handleRejected)
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

export default tasksSlice.reducer;
