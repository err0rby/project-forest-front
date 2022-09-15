import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  basket: [],
  loading: false,
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

export const PushInBasket = createAsyncThunk(
  "user/patch",
  async ({ userId, productId, product }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3013/basket", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId, productId })
      });
      const user = await res.json();
      return product;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);
export const fetchBasket = createAsyncThunk(
  "user/fetch",
  async ({ userId }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3013/basket/${userId}`);
      const user = await res.json();
      return user;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);
export const removeFromBasket = createAsyncThunk(
  "user/remove",
  async ({ userId, productId, product }, thunkAPI) => {
    try {
      console.log(userId, productId);
      const res = await fetch("http://localhost:3013/basket/remove", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId, productId })
      });
      const user = await res.json();
      console.log(user);
      return product;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);
export const countPlus = createAsyncThunk(
  "user/plus",
  async ({ productId }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3013/basket/plus", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId })
      });
      const user = await res.json();
      return productId;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);
export const countMinus = createAsyncThunk(
  "user/minus",
  async ({ productId }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3013/basket/minus", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId })
      });
      const user = await res.json();
      return productId;
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
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchBasket.fulfilled, (state, action) => {
        state.basket = action.payload.basket
      })
      .addCase(PushInBasket.fulfilled, (state, action) => {
        state.basket.push(action.payload)
      })
      .addCase(removeFromBasket.fulfilled, (state, action) => {
        state.basket = state.basket.filter((product) => {
          return product._id !== action.payload._id
        })
      })
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
    .addCase(countPlus.fulfilled, (state, action) => {
      state.basket = state.basket.map((product) => {
        if(product._id === action.payload){
          product.countInBasket += 1
        }
        return product
      })
    })
    .addCase(countMinus.fulfilled, (state, action) => {
      state.basket = state.basket.map((product) => {
        if(product._id === action.payload){
          product.countInBasket -= 1
        }
        return product
      })
    })

  },
});

export default shopSlice.reducer;
