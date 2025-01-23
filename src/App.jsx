import React, { useState, useMemo, useCallback } from 'react';
import './App.css';

const fakeApi = [
  { id: 1, name: 'Apple', price: 1.5 },
  { id: 2, name: 'Banana', price: 0.8 },
  { id: 3, name: 'Carrot', price: 2.0 },
  { id: 4, name: 'Dragonfruit', price: 3.5 },
  { id: 5, name: 'Eggplant', price: 2.3 },
  { id: 6, name: 'Fig', price: 2.8 },
  { id: 7, name: 'Grape', price: 1.2 },
  { id: 8, name: 'Honeydew', price: 3.0 },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on the search term
  const filteredProducts = useMemo(() => {
    return fakeApi.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Function to clear the search term
  const clearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  return (
    <div className="App">
      <h1>Filterable Product List</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
        />
        <button onClick={clearSearch}>Clear</button>
      </div>
      <h2>Products Found: {filteredProducts.length}</h2>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-item">
            <span>{product.name}</span> - <span>${product.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
