import { createContext } from 'react';
import OrderStore from './orders';

export const rootStoreContext = createContext({
  orderStore: new OrderStore(),
});