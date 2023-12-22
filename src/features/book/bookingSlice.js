import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    bookings: [{ id: 1, text: 'Hello' }],
};

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        addBooking: (state, action) => {
            const { storeName, service, date, time } = action.payload;

            const obj = {
                id: nanoid(),
                text: `Store Name: ${storeName}, Service: ${service}, Date: ${date}, Time: ${time}`,
            };

            state.bookings.push(obj);
        },
    },
});

export const { addBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
