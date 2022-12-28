import store from "./index";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { IHeadPhone } from '../pages/shopping-catalog/shoppingCatalog-types';

export interface CartState {
  items: IHeadPhone[];
  totalAmount: number;
}