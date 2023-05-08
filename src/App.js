import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import style from "./components/Menu/MenuCard/MenuCard.module.css";


function App() {

  const [cart, setCart] = useState([]);
 
  const addToCart=(item) => (
    setCart([...cart, item])

  );

  

  return (
    <div className={`App p-2 ${style.cart}`}>
      <div className="mx-auto my-5 contaienr flex flex-row-reverse text-right">
        <div>
          <div className="text-xl">Корзина</div>
          <div>Количество товаров:{cart.length}</div>
          <div className={`${style.summ}`}>
          Сумма:{ cart.reduce((sum,item)=>(sum+=item.price),0)} руб</div>
        </div>
      </div >

      <Menu onItemBuy={(item=>addToCart(item))}/>
    </div>
  );
}

export default App;
