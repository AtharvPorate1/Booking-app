// StoresPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddStoreButton from './AddStoreButton';


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
          <Link to={`/add-booking/${store.id}`}>
            <button>Add Booking</button>
          </Link>
          <hr />
        </div>
      ))}
      <AddStoreButton></AddStoreButton>
    </div>
  );
}

export default StoresPage;
