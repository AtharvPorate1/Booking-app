import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addBooking } from '../features/book/bookingSlice';
import './AddBooking.css';
import Bookings from './Bookings';


function AddBooking() {
  const { storeId } = useParams();
  const dispatch = useDispatch();
  const stores = useSelector((state) => state.booking.bookings);
  const [services, setServices] = useState([]);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '09:00', // Default to 9:00 AM
  });
  const [storeDetails, setStoreDetails] = useState({
    storeName: '',
    services: [],
  });

  useEffect(() => {
    // Fetch store details based on storeId from your db.json
    fetch(`http://localhost:3001/bookings/${storeId}`)
      .then(response => response.json())
      .then(data => {
        setStoreDetails(data);
        setServices(data.services.map(service => service.serviceName));
      })
      .catch(error => console.error('Error fetching store details:', error));
  }, [storeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value,
    });
  };

  const addBookingHandler = (e) => {
    e.preventDefault();
    dispatch(addBooking({ ...bookingData, storeName: storeDetails.storeName }));
    setBookingData({
      service: '',
      date: '',
      time: '09:00', // Reset to default time
    });
  };

  return (
    <div>
      <h2>Add Booking for {storeDetails.storeName}</h2>
      <form onSubmit={addBookingHandler}>
        <label>
          Service:
          <select name="service" value={bookingData.service} onChange={handleChange} required>
            <option value="">Select Service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <br />

        <label>
          Date:
          <input type="date" name="date" value={bookingData.date} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Time:
          <select name="time" value={bookingData.time} onChange={handleChange} required>
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
      <div>
        <Bookings></Bookings>
      </div>
    </div>
  );
}

export default AddBooking;
