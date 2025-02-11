import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCampersById } from "./operations";
// isAnyOf

const initialState = {
  campersItem: [],
  camper: null,
  favorites: [],
  // feauters: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload); // Додаємо до улюблених
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
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

export const { addFavorite, removeFavorite } = slice.actions;
export const campersReducer = slice.reducer;
