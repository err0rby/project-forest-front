import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
};

export const fetchComms = createAsyncThunk('comms/fetch', async (_, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:3013/comments');
        const data = await res.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const addComms = createAsyncThunk('comms/add', async ({ name, text }, thunkAPI) => {
    try {
        const res = await fetch('http://localhost:3013/comments', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${thunkAPI.getState().applicationSlice.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: name, text }),
        })
        const data = await res.json();
        if (data.error) {
            return thunkAPI.rejectWithValue(data.error)
        }
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComms.fulfilled, (state, action) => {
                state.comments = action.payload;
            })
            .addCase(addComms.fulfilled, (state, action) => {
                state.comments.unshift(action.payload);
            })
    }
});

export default commentSlice.reducer;