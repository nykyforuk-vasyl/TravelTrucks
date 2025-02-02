import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";
// isAnyOf
const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCampers.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    // .addMatcher(isAnyOf(fetchCampers.pending), (state) => {
    //   state.loading = true;
    // })
    // .addMatcher(isAnyOf(fetchCampers.fulfilled), (state) => {
    //   state.loading = false;
    // })
    // .addMatcher(isAnyOf(fetchCampers.rejected), (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // });
  },
});

export const campersReducer = slice.reducer;
