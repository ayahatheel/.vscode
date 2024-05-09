import React, { useState } from 'react';
import './App.css';
import RestaurantList from './Components/RestaurantList';
import RestaurantForm from './Components/RestaurantForm';
import RestaurantDetails from './Components/RestaurantDetails';

function App() {
  const [restaurants, setRestaurants] = useState([ {
    id: 1,
    name: "Fried Chicken",
    location: "Baghdad",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Shamsani",
    location: "Baghdad",
    rating: 4.7,
  }]);

  // Generate a unique ID for each restaurant
  const generateId = () => Math.floor(Math.random() * 1000000);

  // Add a new restaurant to the list
  const addRestaurant = (newRestaurant) => {
    const id = generateId();
    setRestaurants([...restaurants, { ...newRestaurant, id }]);
  };

  // Delete a restaurant from the list
  const deleteRestaurant = (id) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
  };

  // Change the rating of a restaurant
  const changeRating = (id, newRating) => {
    const updatedRestaurants = restaurants.map((restaurant) =>
      restaurant.id === id ? { ...restaurant, rating: newRating } : restaurant
    );
    setRestaurants(updatedRestaurants);
  };

  return (
    <div className="maintheme">
      <header className="Appheader">
        <h1>Fried Chicken Guide Web App</h1>
      </header>
      <div className="Appcontent">
        <RestaurantForm className="restuentform" addRestaurant={addRestaurant} />
        <RestaurantList className="restuentlist"
          restaurants={restaurants}
          onDelete={deleteRestaurant}
          onChangeRating={changeRating}
        />
      </div>
    </div>
  );
}

export default App;