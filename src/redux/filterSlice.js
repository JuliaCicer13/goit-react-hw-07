import { createSlice } from '@reduxjs/toolkit';
import { selectStatusFilter } from "../redux/filterSlice";


export const selectTasks = state => state.tasks.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;


export const selectStatusFilter = state => {
  
  const tasks = selectTasks(state);
  const statusFilter = selectStatusFilter(state);
  
  switch (statusFilter) {
    case "active":
      return tasks.filter(task => !task.completed);
    case "completed":
      return tasks.filter(task => tasks.completed);
    default:
      return tasks;  
  }
}
  state.filters.status;

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    status: 'all',
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
