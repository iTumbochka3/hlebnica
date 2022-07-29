import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}

export default App;
