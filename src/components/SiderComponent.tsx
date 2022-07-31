import React from 'react';
import { NavLink } from "react-router-dom";

const SiderComponent: React.FC = () => {
  return (
    <nav
      style={{
        padding: "1rem",
      }}
    >
      <NavLink
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "#E1B168" : "#FFFFFF",
          };
        }}
        to={`/`}
      >
        Основная
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "#E1B168" : "#FFFFFF",
          };
        }}
        to={`/orders`}
      >
        Заказы
      </NavLink>
    </nav>
  );
}

export default SiderComponent;