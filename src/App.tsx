import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoFoundPage from './pages/nofound';
import ShoppingCatalogPage from './pages/shopping-catalog';
import SingleCart from './pages/single-cart';
import ShoppingCartPage from './pages/shopping-cart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShoppingCatalogPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/single-cart" element={<SingleCart />} />
        <Route path="*" element={<NoFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
