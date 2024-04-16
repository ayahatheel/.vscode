import React from 'react';

const RestaurantCard = ({ id, name, location, rating, onDelete, onChangeRating }) => {
  const handleRateChange = () => {
    const newRating = prompt('Enter new rating:');
    if (newRating !== null && !isNaN(newRating)) {
      onChangeRating(id, parseFloat(newRating));
    }
  };

  return (
    <div className="card custom-card">
      <div className="card-body">
        <h5 className="card-title" data-testid="restaurant-name">{name}</h5>
        <p className="card-text" data-testid="restaurant-location">Location: {location}</p>
        <p className="card-text" data-testid="restaurant-rating">Rating: {rating}</p>
        <button className="btn btn-primary mr-2" onClick={handleRateChange}>Change Rate</button>
        <button className="btn btn-danger" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
