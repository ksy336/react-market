import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoFoundPage from './pages/nofound';
import ShoppingCatalogPage from './pages/shopping-catalog';
import SingleCart from './pages/single-cart';
import ShoppingCartPage from './pages/shopping-cart';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import '../src/i18n/index';

function App() {
  const [itemsToLocalStorage, setItemsToLocalStorage, setDifferentValue, remove] = useLocalStorage('items', []);
  const [totalAmount, setTotalAmount, setDifferentAmount] = useLocalStorage('totalAmount', 0);
  const [numberOfItems, setNumberOfItems, setDifferentNumber] = useLocalStorage('number', 1);
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
