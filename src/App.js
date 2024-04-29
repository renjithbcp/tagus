import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductSearchPage from './components/ProductSearchPage.js';
import ProductDetailsPage from './components/productDetailsPage.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Product Search</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ProductSearchPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
