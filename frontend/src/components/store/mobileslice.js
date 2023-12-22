import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const host_url = process.env.REACT_APP_HOST_URL;

export const fetchMobiles = createAsyncThunk(
  'mobile/fetchMobiles',
  async (selectedValues, { rejectWithValue }) => {
    try {
      const { name, price, type, processor, memory, os } = selectedValues;
      const response = await axios.get(`${host_url}mobiles`, {
        params: { name, price, type, processor, memory, os }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const MobileSlice = createSlice({
  name: "mobile",
  initialState: {
    mobiles: [],
    loading: false,
    error: null,
    mobilesNotFound: false,
  },
  reducers: {
    // Any other reducers you may have
    removeMobileNotFound(state, action) {
      state.mobilesNotFound = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMobiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMobiles.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.mobiles = action.payload;
      })
      .addCase(fetchMobiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.mobiles = [];
        state.mobilesNotFound = true;
      });
  },
});
export default MobileSlice;
export const { removeMobileNotFound } = MobileSlice.actions;

export const mobileActions = {
  removeMobileNotFound,
  fetchMobiles,
};

// export const { addToCart, removeItemExists, removeItemAdded } = MobileSlice.actions;
