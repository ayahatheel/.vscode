import React, { useState } from 'react';
import './App.css';
import RestaurantList from './Components/RestaurantList';
import RestaurantForm from './Components/RestaurantForm';
import RestaurantDetails from './Components/RestaurantDetails';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const generateId = () => Math.floor(Math.random() * 1000000);

  const addRestaurant = (newRestaurant) => {
    const id = generateId(); 
    setRestaurants([...restaurants, { ...newRestaurant, id }]);
  };

  const deleteRestaurant = (id) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
  };

  const changeRating = (id, newRating) => {
    const updatedRestaurants = restaurants.map((restaurant) =>
      restaurant.id === id ? { ...restaurant, rating: newRating } : restaurant
    );
    setRestaurants(updatedRestaurants);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fried Chicken Guide Web App</h1>
      </header>
      <div className="App-content">
        <RestaurantForm addRestaurant={addRestaurant} />
        <RestaurantList
          restaurants={restaurants}
          onDelete={deleteRestaurant}
          onChangeRating={changeRating}
        />
      </div>
    </div>
  );
}

export default App;
