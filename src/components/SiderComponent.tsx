import React from 'react';
import { NavLink } from 'react-router-dom';
import './SiderComponent.scss';

const SiderComponent: React.FC = () => {
  return (
    <nav className='navbar'>
      <NavLink to={`/`}
        className={({ isActive }) => isActive ? "navbar__link navbar__link_active" : "navbar__link"}
      >
        Основная
      </NavLink>
      <NavLink to={`/orders`}
        className={({ isActive }) => isActive ? "navbar__link navbar__link_active" : "navbar__link"}
      >
        Заказы
      </NavLink>
    </nav>
  );
}

export default SiderComponent;