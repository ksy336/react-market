import * as React from 'react';
import ShoppingCatalogView from './shoppingCatalog-view';
import data from '../../headphones.json';
import { useState } from 'react';
import './shoppingCatalog.css';


const ShoppingCatalogContainer = ({itemsToLocalStorage, setItemsToLocalStorage, totalAmount, setTotalAmount}: any) => {
  const [headphones] = useState(data);
  return <ShoppingCatalogView totalAmount={totalAmount} setTotalAmount={setTotalAmount}  itemsToLocalStorage={itemsToLocalStorage} setItemsToLocalStorage={setItemsToLocalStorage}  headphones={headphones} />;
};
export default ShoppingCatalogContainer;
