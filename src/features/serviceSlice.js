import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    service: []
}

export const fetchServices = createAsyncThunk(
    'fetch/service',
    async (_, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:3013/services')

            const data = await res.json()

            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.service = action.payload
            })
    }
})

export default serviceSlice.reducer