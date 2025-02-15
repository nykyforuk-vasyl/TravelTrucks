import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchFiltered",
  async ({ page = 1, limit = 4 }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const filters = state.filters;

      let queryParams = new URLSearchParams({ page, limit });

      if (filters.location) {
        const city = filters.location.split(/[,\s]+/)[0];
        queryParams.append("location", city);
      }
      if (filters.vehicleType) queryParams.append("form", filters.vehicleType);
      if (filters.transmission === "automatic")
        queryParams.append("transmission", "automatic");
      if (filters.engine) queryParams.append("engine", filters.engine);
      if (filters.equipment.length) {
        filters.equipment
          .filter((item) => typeof item === "string" && item.trim() !== "")
          .forEach((item) => queryParams.append(item, "true"));
      }

      const queryString =
        queryParams.toString().length > 0 ? `?${queryParams.toString()}` : "";

      const response = await api.get(`/campers${queryString}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e.response?.status === 404
          ? "No campers found. Try changing the filters."
          : e.response?.data || e.message,
      );
    }
  },
);

export const fetchCampersById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`/campers/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  },
);
