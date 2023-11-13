import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import githubLogo from './github-logo.png';

function App() {
  const [myList, setMyList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const groceryItems = ['Apple', 'Banana', 'Bread', 'Milk']; // Add more items as needed

  const addToMyList = async (itemName) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/getPrice/${itemName}`);
      const price = response.data.price;
      setMyList([...myList, { itemName, price }]);
      setTotalPrice(totalPrice + price);
    } catch (error) {
      console.error('Error fetching price:', error);
    }
  };

  return (
    <div className="app">
      <div className="grocery-list">
        <h2>Grocery Items</h2>
        <ul>
          {groceryItems.map(item => (
            <li key={item} onClick={() => addToMyList(item)}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="my-list">
        <h2>My Grocery List</h2>
        <ul>
          {myList.map((item, index) => (
            <li key={index}>{item.itemName} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      <div className="header">
        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
      </div>
    </div>
  );
}

export default App;

