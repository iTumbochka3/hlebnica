import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import './index.scss';
import App from './App';
import OrderPage from './pages/OrderPage';
import OrdersPage from './pages/OrdersPage';
import WelcomePage from './pages/WelcomePage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<WelcomePage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<OrderPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
