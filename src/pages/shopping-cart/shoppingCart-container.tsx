import * as React from 'react';
import { useEffect } from 'react';
import ShoppingCartView from './shoppingCart-view';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import useLocalStorage from "../../hooks/useLocalStorage";
import ShoppingCartPage from "./index";

const ShoppingCartContainer = ({itemsToLocalStorage, totalAmount}: any) => {
  // const items = useSelector((state: RootState) => state.cart.items);
  // const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);


  return <ShoppingCartView cartItems={itemsToLocalStorage} amount={totalAmount} />;
};
export default ShoppingCartContainer;
