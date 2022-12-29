import * as React from 'react';
import SingleCartView from './singleCart-view';
import './singleCart.css';
import useLocalStorage from "../../hooks/useLocalStorage";

const SingleCartContainer = ({itemsToLocalStorage, setItemsToLocalStorage}: any) => {
  return <SingleCartView itemsToLocalStorage={itemsToLocalStorage} setItemsToLocalStorage={setItemsToLocalStorage} />;
};

export default SingleCartContainer;
