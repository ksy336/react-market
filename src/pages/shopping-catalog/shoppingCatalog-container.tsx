import ShoppingCatalogView from './shoppingCatalog-view';
import data from '../../headphones.json';
import { useState } from 'react';

const ShoppingCatalogContainer = () => {
  const [headphones] = useState(data);

  return <ShoppingCatalogView headphones={headphones} />;
};
export default ShoppingCatalogContainer;
