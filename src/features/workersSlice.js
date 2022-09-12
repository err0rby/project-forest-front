import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    workers: []
};

export const fetchWorkers = createAsyncThunk(
    'workers/fetch',
    async (_, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:3013/worker")

            const data = await res.json();

            return data;
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    })

const workersSlice = createSlice({
    name: 'workers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWorkers.fulfilled, (state, action) => {
                state.workers = action.payload
            })
    }
});

export default workersSlice.reducer;