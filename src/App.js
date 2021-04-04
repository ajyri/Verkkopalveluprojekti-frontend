import {React, useEffect, useState} from 'react'
import './styles.css';
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import Footer from './Components/Footer.js'
import { Switch, Route, useLocation} from 'react-router-dom';
import Categories from './Components/Categories.js';

function App() {

  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState([]);
  const [trnro, setTrnro] = useState(null);
  const [total, setTotal] = useState(0)
  let location = useLocation();

  useEffect(() => {
    if (location.state!==undefined) {
      setTrnro(location.state.trnro)
    }
  }, [location.state])

  function getTotal(){    
      return <p>{total.toFixed(1)}</p>
    }

  

  function addToCart(item){
    //See if item already exists in array, if not add it.
    const exist = cart.find(exist => exist === item)
    if(exist){
      item.qty = item.qty + 1
      const newQty = [...qty, item.qty]
      setQty(newQty)
      console.log(total)
      setTotal(total + (item.hinta * item.qty))
    }else{
      const newCart = [...cart, item]
      item.qty = 1
      const newQty = [...qty, item.qty]
      setCart(newCart)
      setQty(newQty)
      setTotal(total + (item.hinta))
      console.log(total)
    }
  }

  function removeFromCart(item){
    if(item.qty == 1){
      let index = cart.indexOf(item)
      const newCart = [...cart]
      newCart.splice(index,1)
      setCart(newCart)
    }
    console.log(item.qty)
    item.qty = item.qty -1
    const newQty = [...qty, item.qty]
    setQty(newQty)
    console.log(qty)
  }
  
  return (
    <div className="container">
    <Header cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} getTotal={getTotal}/>
    <Switch>
      <Route path="/" render={() => <Home
      addToCart={addToCart}/>}
      exact
      />
      <Route path="/categories" render={() => <Categories
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
