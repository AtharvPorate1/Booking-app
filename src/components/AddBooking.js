import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from '../features/book/bookingSlice';
import './AddBooking.css'

function AddBooking() {
    const [bookingData, setBookingData] = useState({
        storeName: '',
        service: '',
        date: '',
        time: '09:00', // Default to 9:00 AM
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingData({
            ...bookingData,
            [name]: value
        });
    };

    const addBookingHandler = (e) => {
        e.preventDefault();
        dispatch(addBooking(bookingData));
        setBookingData({
            storeName: '',
            service: '',
            date: '',
            time: '09:00', // Reset to default time
        });
    };

    return (
        <div>
            <h2>Add Booking</h2>
            <form onSubmit={addBookingHandler}>
                <label>
                    Store Name:
                    <input
                        type="text"
                        name="storeName"
                        value={bookingData.storeName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <label>
                    Service:
                    <input
                        type="text"
                        name="service"
                        value={bookingData.service}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={bookingData.date}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <label>
                    Time:
                    <select
                        name="time"
                        value={bookingData.time}
                        onChange={handleChange}
                        required
                    >
                        {Array.from({ length: 8 }, (_, index) => {
                            const hour = index + 9;
                            const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
                            return (
                                <option key={formattedHour} value={`${formattedHour}:00`}>
                                    {`${formattedHour}:00`}
                                </option>
                            );
                        })}
                    </select>
                </label>
                <br />

                <button type="submit">Add Booking</button>
            </form>
        </div>
    );
}

export default AddBooking;
