// Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoresPage from './StoresPage';
import AddBooking from './AddBooking';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StoresPage />} />
        <Route path="/add-booking/:storeId" element={<AddBooking />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
