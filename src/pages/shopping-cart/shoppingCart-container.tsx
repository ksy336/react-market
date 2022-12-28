import * as React from 'react';
import { useEffect } from 'react';
import ShoppingCartView from './shoppingCart-view';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';

const ShoppingCartContainer = () => {
  // const cartCtx = useContext(CartContext);
  const items = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  console.log(items);
  useEffect(() => {
    addToLocalStorage();
  });
  const addToLocalStorage = () => {
    // if (localStorage.getItem())
    localStorage.setItem('product', JSON.stringify(items));
  };

  return <ShoppingCartView cartItems={items} amount={totalAmount} />;
};
export default ShoppingCartContainer;
