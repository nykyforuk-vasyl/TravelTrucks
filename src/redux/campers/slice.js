import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCampersById } from "./operations";
// isAnyOf

const initialState = {
  campersItem: [],
  camper: null,
  // feauters: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true; // Завантаження почалося
        state.error = null; // Скидаємо попередні помилки
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false; // Завантаження завершено
        state.campersItem = action.payload; // Додаємо отримані дані
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false; // Завантаження завершено з помилкою
        state.error = action.payload; // Зберігаємо помилку
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

export const campersReducer = slice.reducer;
