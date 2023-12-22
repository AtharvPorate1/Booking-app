import React from 'react';
import { useSelector } from 'react-redux';

function Bookings() {
    const bookings = useSelector((state) => state.booking.bookings);
    console.log(bookings);

    return (
        <>
            <h4>
                {bookings.map((booking) => (
                    <div key={booking.id}>
                        {booking.text}
                    </div>
                ))}
            </h4>
        </>
    );
}

export default Bookings;
