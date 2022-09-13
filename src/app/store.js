import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "../features/applicationSlice";
import workersSlice from "../features/workersSlice";
import requestSlice from "../features/requestSlice";
import serviceSlice from "../features/serviceSlice";

const store = configureStore({
    reducer: {
        applicationSlice,
        workersSlice,
        requestSlice,
        serviceSlice
    }
});

export default store;