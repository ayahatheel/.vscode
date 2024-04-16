import React from 'react';
import { useParams } from 'react-router-dom';

const RestaurantDetails = ({ restaurant }) => {
  const { id } = useParams();

  if (!restaurant || restaurant.id !== parseInt(id)) {
    return <div>Restaurant not found!</div>;
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>Location: {restaurant.location}</p>
      <p>Rating: {restaurant.rating}</p>
    </div>
  );
};

export default RestaurantDetails;
