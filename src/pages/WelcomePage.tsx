import React from 'react';
import { Card, List, Image } from 'antd';
import { useStores } from '../use/use-stores';
import bulochka from '../assets/products/bulochkassaharom.jpg';

const WelcomePage: React.FC = () => {
  const { productStore } = useStores();
  return (
    <div>
      <h3>Вся продукция</h3>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={productStore.products}
        renderItem={item => (
          <List.Item>
            <Card title={item.name}>
              <Image
                width={100}
                src={bulochka}
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default WelcomePage;
