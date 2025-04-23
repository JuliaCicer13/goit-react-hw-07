import { createSlice } from '@reduxjs/toolkit';

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

export const { setNameFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name;
export default filtersSlice.reducer;
