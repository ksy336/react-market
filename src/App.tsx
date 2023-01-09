import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoFoundPage from './pages/nofound';
import ShoppingCatalogPage from './pages/shopping-catalog';
import SingleCart from './pages/single-cart';
import ShoppingCartPage from './pages/shopping-cart';
import useLocalStorage from './hooks/useLocalStorage';
import '../src/i18n/index';
import {useEffect, useState} from "react";
import data from "./headphones.json";
import './App.css';


function App() {
  const [itemsToLocalStorage, setItemsToLocalStorage, setDifferentValue, remove] = useLocalStorage('items', []);
  const [totalAmount, setTotalAmount, setDifferentAmount] = useLocalStorage('totalAmount',
    {
      price: itemsToLocalStorage.reduce((prev: any, curr: any) => prev + curr.price, 0)
    });
  useEffect(() => {
    setTotalAmount(() => itemsToLocalStorage.reduce((prev: any, curr: any) => prev + curr.price), 0);

  }, [itemsToLocalStorage]);
  console.log(totalAmount)
  const [numberOfItems, setNumberOfItems, setDifferentNumber] = useLocalStorage('number', 1);
  const [headphones] = useState(data);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ShoppingCatalogPage
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
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
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
              itemsToLocalStorage={itemsToLocalStorage}
              setItemsToLocalStorage={setItemsToLocalStorage}
              setDifferentAmount={setDifferentAmount}
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
