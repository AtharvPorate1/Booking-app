// StoreBuilder.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function StoreBuilder() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    storeName: '',
    serviceType: '',
    openingTime: '',
    closingTime: '',
    timeSlotSize: '',
    services: [],
  });

  const [newService, setNewService] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddService = () => {
    if (newService.trim() !== '') {
      setFormData({
        ...formData,
        services: [
          ...formData.services,
          { serviceName: newService.trim() },
        ],
      });
      setNewService('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Store added successfully');
        // Optionally, dispatch an action to update Redux store
      } else {
        console.error('Failed to add store:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h2>Store Builder</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Store Name:
          <input
            type="text"
            name="storeName"
            value={formData.storeName}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Service Type:
          <input
            type="text"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Opening Time:
          <input
            type="time"
            name="openingTime"
            value={formData.openingTime}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Closing Time:
          <input
            type="time"
            name="closingTime"
            value={formData.closingTime}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Time Slot Size:
          <input
            type="number"
            name="timeSlotSize"
            value={formData.timeSlotSize}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Services:
          <input
            type="text"
            placeholder="Add a service"
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
          />
          <button type="button" onClick={handleAddService}>
            Add Service
          </button>
          <ul>
            {formData.services.map((service, index) => (
              <li key={index}>{service.serviceName}</li>
            ))}
          </ul>
        </label>
        <br />

        <button type="submit">Create Store</button>
      </form>
    </div>
  );
}

export default StoreBuilder;
