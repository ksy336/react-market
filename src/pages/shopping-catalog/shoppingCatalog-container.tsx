import * as React from 'react';
import ShoppingCatalogView from './shoppingCatalog-view';
import data from '../../headphones.json';
import { useState } from 'react';
import './shoppingCatalog.css';

const ShoppingCatalogContainer = () => {
  const [headphones] = useState(data);

  return <ShoppingCatalogView headphones={headphones} />;
};
export default ShoppingCatalogContainer;
