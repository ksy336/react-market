import { createContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: any) => {},
  removeItem: (id: string) => {},
});
export default CartContext;
