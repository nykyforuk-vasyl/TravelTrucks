import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCampersById } from "../operations";

const initialState = {
  campersItem: [],
  camper: null,
  totalCampers: null,
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetCampers: (state) => {
      state.campersItem = [];
      state.totalCampers = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.totalCampers = action.payload.total;
        const newCampers = action.payload.items.filter(
          (newCamper) =>
            !state.campersItem.some(
              (existingCamper) => existingCamper.id === newCamper.id,
            ),
        );
        state.campersItem = [...state.campersItem, ...newCampers];
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchCampersById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampersById.fulfilled, (state, action) => {
        state.loading = false;
        state.camper = action.payload;
      })
      .addCase(fetchCampersById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
