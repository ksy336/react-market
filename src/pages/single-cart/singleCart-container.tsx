import * as React from 'react';
import SingleCartView from './singleCart-view';
import './singleCart.css';
import { useTranslation } from 'react-i18next';

const SingleCartContainer = ({ itemsToLocalStorage, setItemsToLocalStorage }: any) => {
  const { t } = useTranslation();
  return <SingleCartView itemsToLocalStorage={itemsToLocalStorage} setItemsToLocalStorage={setItemsToLocalStorage} t={t} />;
};

export default SingleCartContainer;
