import {React, useState} from 'react'
import './styles.css';
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import Footer from './Components/Footer.js'
import { Switch, Route} from 'react-router-dom';
import Testisivu from './Components/Testisivu.js';

function App() {

  const [cart, setCart] = useState([]);
  
  function addToCart(item){
    const newCart = [...cart,item.tuotenimi]
    setCart(newCart)
    console.log(cart)
  }
  
  return (
    <div className="container">
    <Header cart={cart}/>
    <Switch>
      <Route path="/" render={() => <Home
      addToCart={addToCart}/>}
      exact
      />
      <Route path="/testi" component={Testisivu} />
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
