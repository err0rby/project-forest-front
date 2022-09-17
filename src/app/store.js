import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "../features/applicationSlice";
import workersSlice from "../features/workersSlice";
import requestSlice from "../features/requestSlice";
import serviceSlice from "../features/serviceSlice";
import commentSlice from "../features/commentSlice";
import shopSlice from "../features/shopSlice";
import userSlice from "../features/userSlice";

const store = configureStore({
    reducer: {
        applicationSlice,
        workersSlice,
        requestSlice,
        serviceSlice,
        commentSlice,
        shopSlice,
        userSlice,
    }
});

export default store;