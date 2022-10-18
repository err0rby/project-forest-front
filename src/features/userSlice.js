import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { serverUrl } from "../serverUrl";

const initialState = {
    users: [],
}

export const fetchUsers = createAsyncThunk('users/fetch', async (_, thunkAPI) => {
    try {
        const res = await fetch(`${serverUrl}/user`);
        const data = await res.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
    }
});

export default userSlice.reducer;