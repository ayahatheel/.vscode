import React, { useState } from 'react';

const RestaurantForm = ({ addRestaurant }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRestaurant({ name, location, rating });
    setName('');
    setLocation('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='input'
        type="text"
        placeholder="Restaurant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        data-testid="restaurant-name-input"
      />
      <input className='input'
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        data-testid="restaurant-location-input"
      />
      <input className='input'
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="0"
        max="10"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default RestaurantForm;
