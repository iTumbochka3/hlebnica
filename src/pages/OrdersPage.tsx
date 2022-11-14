import React from 'react';
import './OrdersPage.scss';
import { List } from 'antd';
import {
  CheckCircleFilled,
  ClockCircleFilled,
  CloseCircleFilled,
} from '@ant-design/icons';
import { useStores } from '../use/use-stores';

const OrdersPage: React.FC = () => {
  const { orderStore, productStore } = useStores();
  const iconColors = {
    complete: <CheckCircleFilled style={{ color: 'green' }} />,
    active: <ClockCircleFilled style={{ color: 'blue' }} />,
    delete: <CloseCircleFilled style={{ color: 'red' }} />,
  };
  return (
    <div className='orders-div'>
      <List
        itemLayout="horizontal"
        dataSource={orderStore.orders}
        renderItem={order => (
          <List.Item>
            <List.Item.Meta
              avatar={iconColors[order.status as keyof typeof iconColors]}
              title={order.date.toDateString()}
              description={order.items.map((id) => productStore.products.filter(p => p.id === id)[0].name)}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default OrdersPage;
