// StoresPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function StoresPage() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/bookings')
      .then(response => response.json())
      .then(data => setStores(data));
  }, []);

  return (
    <div>
      <h1>Stores Page</h1>
      {stores.map(store => (
        <div key={store.id}>
          <h2>{store.storeName}</h2>
          <p>Type: {store.serviceType}</p>
          <p>Opening Time: {store.openingTime}</p>
          <p>Closing Time: {store.closingTime}</p>
          <p>Time-Slot Size: {store.timeSlotSize} minutes</p>
          <ul>
            {store.services.map(service => (
              <li key={service.serviceName}>
                {service.serviceName}
              </li>
            ))}
          </ul>
          <Link to={`/add-booking/${store.id}`}>Add Booking</Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default StoresPage;
