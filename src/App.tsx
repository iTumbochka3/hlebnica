import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import './App.scss';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className='App'>
      <Header className='header'>
        <HeaderComponent />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer className='footer'>
        <FooterComponent />
      </Footer>
    </Layout>
  );
}

export default App;
