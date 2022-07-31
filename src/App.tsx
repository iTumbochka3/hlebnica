import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import './App.scss';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import SiderComponent from './components/SiderComponent';

const { Header, Footer, Content, Sider } = Layout;

const App: React.FC = () => {
  return (
    <Layout className='App'>
      <Header className='header'>
        <HeaderComponent />
      </Header>
      <Layout>
        <Sider className='sider'>
          <SiderComponent />
        </Sider>
        <Content className='content'>
          <Outlet />
        </Content>
      </Layout>
      <Footer className='footer'>
        <FooterComponent />
      </Footer>
    </Layout>
  );
}

export default App;
