import { useState } from 'react';
import './App.css';
import Menu from './pages/MenuPages';
import style from "./components/MenuCard/MenuCard.module.css";
import { Outlet } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import CartProvider from './components/providers/CartProvider';
import CartWidget from './components/CartWidjet';



function App() {




  return (
    <div className={`App p-2 ${style.cart}`}>



      <MainMenu />
      <CartProvider>
        <CartWidget />
      </CartProvider>
      <Outlet></Outlet>

      



    </div>
  );
}

export default App;
