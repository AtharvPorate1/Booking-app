// Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoresPage from './StoresPage';
import AddBooking from './AddBooking';
import StoreBuilder from './StoreBuilder'; // Import the StoreBuilder component

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StoresPage />} />
        <Route path="/add-booking/:storeId" element={<AddBooking />} />
        <Route path="/add-store" element={<StoreBuilder />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
