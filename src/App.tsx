import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoFoundPage from './pages/nofound';
import ShoppingCatalogPage from './pages/shopping-catalog';
import SingleCart from './pages/single-cart';
import ShoppingCartPage from './pages/shopping-cart';
import './App.css';
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [itemsToLocalStorage, setItemsToLocalStorage] = useLocalStorage("items", []);
  const [totalAmount, setTotalAmount] = useLocalStorage("totalAmount", 0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShoppingCatalogPage totalAmount={totalAmount} setTotalAmount={setTotalAmount} itemsToLocalStorage={itemsToLocalStorage} setItemsToLocalStorage={setItemsToLocalStorage} />} />
        <Route path="/cart" element={<ShoppingCartPage totalAmount={totalAmount} setTotalAmount={setTotalAmount} itemsToLocalStorage={itemsToLocalStorage} setItemsToLocalStorage={setItemsToLocalStorage} />} />
        <Route path="/single-cart" element={<SingleCart itemsToLocalStorage={itemsToLocalStorage} setItemsToLocalStorage={setItemsToLocalStorage} />} />
        <Route path="*" element={<NoFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
