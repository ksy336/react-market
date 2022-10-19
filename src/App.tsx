import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoFoundPage from './pages/nofound';
import ShoppingCatalogPage from './pages/shopping-catalog';
import ShoppingCartPage from './pages/shopping-cart';
import './App.css';
import CartProvider from './store/cartProvider';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShoppingCatalogPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="*" element={<NoFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
