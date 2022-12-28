import { useReducer } from 'react';
import CartContext from './cartContext';
import { IHeadphones } from '../pages/shopping-catalog/components/Cards/Cards-types';

export interface ICart {
  items: [];
  totalAmount: number;
}
const defaultState: ICart = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state: any, action: { type: string; payload: any }) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.payload);
    const updatedTotalAmount = Number(action.payload.price) + Number(action.payload.price);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultState;
};

const CartProvider = (props: any) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultState);

  const addToCartItem = (item: IHeadphones) => {
    dispatchAction({ type: 'ADD', payload: item });
  };
  const removeFromCartIteem = (id: string) => {
    dispatchAction({ type: 'REMOVE', payload: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartItem,
    removeItem: removeFromCartIteem,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};
export default CartProvider;
