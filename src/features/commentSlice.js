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

export const addLike = createAsyncThunk('like/add', async ({ name, id }, thunkAPI) => {
    try {
        const res = await fetch(`http://localhost:3013/comments/${id}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${thunkAPI.getState().applicationSlice.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: name })
        });
        const data = await res.json();
        return { name, id };
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const deleteLike = createAsyncThunk('like/delete', async ({ name, id }, thunkAPI) => {
    try {
        const res = await fetch(`http://localhost:3013/comments/del/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${thunkAPI.getState().applicationSlice.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: name })
        })
        const data = await res.json();
        return { name, id }
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const deleteComm = createAsyncThunk('comment/delete', async (id, thunkAPI) => {
    try {
        const res = await fetch(`http://localhost:3013/comments/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${thunkAPI.getState().applicationSlice.token}`,
                'Content-Type': 'application/json',
            },
        })
        const data = res.json();
        return id;
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
                state.comments = action.payload.reverse();
            })
            .addCase(addComms.fulfilled, (state, action) => {
                state.comments.unshift(action.payload);
            })
            .addCase(deleteComm.fulfilled, (state, action) => {
                state.comments = state.comments.filter((com) => com._id !== action.payload)
            })
        .addCase(addLike.fulfilled, (state, action) => {
            state.comments = state.comments.map((item) => {
                if (item._id === action.payload.id) {
                    item.likes.push(action.payload.name);
                }
                return item;
            })
        })
        .addCase(deleteLike.fulfilled, (state, action) => {
            state.comments = state.comments.map((item) => {
                if (item._id === action.payload.id) {
                    item.likes.pop(action.payload.name)
                }
                return item
            })
        })
    }
});

export default commentSlice.reducer;