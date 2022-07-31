import React from 'react';
import { Card, List, Image } from 'antd';
import { useStores } from '../use/use-stores';
import bulochka from '../assets/products/bulochkassaharom.jpg';
import '../assets/product-card.scss';

const WelcomePage: React.FC = () => {
  const { productStore } = useStores();
  return (
    <div>
      <h3>Вся продукция</h3>
      <List
        grid={{
          gutter: 8,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        dataSource={productStore.products}
        renderItem={item => (
          <List.Item>
            <Card title={item.name} className='product-card'>
              <Image
                className='product-card__image'
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
