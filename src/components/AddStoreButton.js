// In a component or page where you want to add a new store
import React from 'react';
import { Link } from 'react-router-dom';

function AddStoreButton() {
  return (
    <Link to="/add-store">Add a New Store</Link>
  );
}

export default AddStoreButton;
