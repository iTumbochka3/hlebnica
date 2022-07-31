import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const SiderComponent: React.FC = () => {
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = event => {
    navigate(`${event.key}`);
  };
  const items: MenuProps['items'] = [
    getItem('Основная', '/'),
    getItem('Заказы', '/orders'),
  ];
  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={['/']}
      mode="inline"
      items={items}
    />
  );
}

export default SiderComponent;