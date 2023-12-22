import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../features/book/bookingSlice";

export const store = configureStore({
    reducer: {
        // Use the correct key for the reducer
        booking: bookingReducer,
    },
});
