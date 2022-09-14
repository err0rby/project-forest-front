import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const getProducts = createAsyncThunk(
  "products/get",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3013/products");
      const products = await res.json();
      return products;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

const shopSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default shopSlice.reducer;
