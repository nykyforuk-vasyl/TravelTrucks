import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/campers");
      return response.data.items;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
