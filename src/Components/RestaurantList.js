import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants, onDelete, onChangeRating }) => {
  return (
    <div data-testid="restaurants-list">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.name}
          location={restaurant.location}
          rating={restaurant.rating}
          onDelete={() => onDelete(restaurant.id)} 
          onChangeRating={(id, newRating) => onChangeRating(id, newRating)} 
        />
      ))}
    </div>
  );
};

export default RestaurantList;
