import { createContext } from 'react';
import OrderStore from './orders';
import ProductStore from './products';

export const rootStoreContext = createContext({
  orderStore: new OrderStore(),
  productStore: new ProductStore(),
});