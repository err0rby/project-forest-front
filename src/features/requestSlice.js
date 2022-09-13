import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    requests: [],
}

export const fetchRequest = createAsyncThunk('request/fetch', async(_, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:3013/requests');
        const data = res.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

const requestSlice = createSlice({
    name:'requests',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase (fetchRequest.fulfilled, (state, action) => {
            state.requests = action.payload;
        })
    }
});

export default requestSlice.reducer;