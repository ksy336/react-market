import * as React from 'react';
import ShoppingCatalogView from './shoppingCatalog-view';
import data from '../../headphones.json';
import { useState } from 'react';
import './shoppingCatalog.css';
import { useTranslation } from 'react-i18next';

const ShoppingCatalogContainer = ({ itemsToLocalStorage, setItemsToLocalStorage, totalAmount, setTotalAmount }: any) => {
  const [headphones] = useState(data);
  const { t } = useTranslation();
  return (
    <ShoppingCatalogView
      totalAmount={totalAmount}
      setTotalAmount={setTotalAmount}
      itemsToLocalStorage={itemsToLocalStorage}
      setItemsToLocalStorage={setItemsToLocalStorage}
      headphones={headphones}
      t={t}
    />
  );
};
export default ShoppingCatalogContainer;
