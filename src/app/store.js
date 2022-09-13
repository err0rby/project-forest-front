import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "../features/applicationSlice";
import workersSlice from "../features/workersSlice";

const store = configureStore({
    reducer: {
        applicationSlice,
        workersSlice
    }
});

export default store;