import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "../features/applicationSlice";
import workersSlice from "../features/workersSlice";
import serviceSlice from "../features/serviceSlice";

const store = configureStore({
    reducer: {
        applicationSlice,
        workersSlice,
        serviceSlice
    }
});

export default store;