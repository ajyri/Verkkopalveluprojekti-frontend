import {React, useState} from 'react'
import './styles.css';
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import Footer from './Components/Footer.js'
import { Switch, Route} from 'react-router-dom';
import Testisivu from './Components/Testisivu.js';

function App() {

  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState([]);

  const trnro = 1; // Tämä variable luotu vain testausta varten

  function addToCart(item){
    //See if item already exists in array, if not add it.
    const exist = cart.find(exist => exist === item)
    if(exist){
      console.log(item.qty)
      item.qty = item.qty + 1
      const newQty = [...qty, item.qty]
      setQty(newQty)
      console.log(qty)
    }else{
      const newCart = [...cart, item]
      item.qty = 1
      const newQty = [...qty, item.qty]
      setCart(newCart)
      setQty(newQty)
      console.log(cart)
      console.log(qty)
    }
  }
  
  return (
    <div className="container">
    <Header cart={cart}/>
    <Switch>
      <Route path="/" render={() => <Home
      addToCart={addToCart}/>}
      exact
      />
      <Route path="/testi" render={() => <Testisivu
      addToCart={addToCart}
      trnro={trnro}
      />}
      />
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
