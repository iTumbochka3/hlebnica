import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.scss';
import OrderPage from './pages/OrderPage';
import OrdersPage from './pages/OrdersPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<OrderPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
