import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "../features/applicationSlice";
import workersSlice from "../features/workersSlice";
import requestSlice from "../features/requestSlice";

const store = configureStore({
    reducer: {
        applicationSlice,
        workersSlice,
        requestSlice,
    }
});

export default store;