import * as React from 'react';
import {useEffect, useMemo, useState} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoFoundPage from './pages/nofound';
import ShoppingCatalogPage from './pages/shopping-catalog';
import SingleCart from './pages/single-cart';
import ShoppingCartPage from './pages/shopping-cart';
import useLocalStorage from './hooks/useLocalStorage';
import '../src/i18n/index';
import data from "./headphones.json";
import './App.css';


function App() {
  const [itemsToLocalStorage, setItemsToLocalStorage, setDifferentValue] = useLocalStorage('items', []);
  const [numberOfItems, setNumberOfItems, setDifferentNumber] = useLocalStorage('number', 1);
  const [headphones] = useState(data);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ShoppingCatalogPage
              itemsToLocalStorage={itemsToLocalStorage}
              setItemsToLocalStorage={setItemsToLocalStorage}
              headphones={headphones}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <ShoppingCartPage
              setDifferentValue={setDifferentValue}
              itemsToLocalStorage={itemsToLocalStorage}
              setItemsToLocalStorage={setItemsToLocalStorage}
              numberOfItems={numberOfItems}
              setNumberOfItems={setNumberOfItems}
              setDifferentNumber={setDifferentNumber}
              headphones={headphones}
            />
          }
        />
        <Route path="/single-cart" element={<SingleCart itemsToLocalStorage={itemsToLocalStorage} setItemsToLocalStorage={setItemsToLocalStorage} />} />
        <Route path="*" element={<NoFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
