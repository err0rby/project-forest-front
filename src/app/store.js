import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "../features/applicationSlice";

const store = configureStore({
    reducer: {
        applicationSlice,
    }
});

export default store;