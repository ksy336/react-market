import { useContext, useEffect } from 'react';
import CartContext from '../../store/cartContext';
import ShoppingCartView from './shoppingCart-view';

const ShoppingCartContainer = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.items);
  useEffect(() => {
    addToLocalStorage();
  });
  const addToLocalStorage = () => {
    // if (localStorage.getItem())
    localStorage.setItem('product', JSON.stringify(cartCtx.items));
  };

  return <ShoppingCartView cartItems={cartCtx.items} amount={cartCtx.totalAmount} />;
};
export default ShoppingCartContainer;
