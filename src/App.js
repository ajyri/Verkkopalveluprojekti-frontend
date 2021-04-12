import { React, useEffect, useState } from 'react'
import './styles.css';
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import Footer from './Components/Footer.js'
import { Switch, Route, useLocation } from 'react-router-dom';
import Categories from './Components/Categories.js';
import Checkout from './Components/Checkout.js';
import Details from './Components/Details.js'


function App() {

  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState([]);
  const [trnro, setTrnro] = useState(null);
  let location = useLocation();

  useEffect(() => {
    if (location.state !== undefined) {
      setTrnro(location.state.trnro)
    }
  }, [location.state])

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])



  function addToCart(item) {
    //See if item already exists in array, if not add it.
    const exist = cart.find(exist => exist.tuotenimi === item.tuotenimi)
    if (exist) {
      exist.qty = exist.qty + 1
      const newQty = [...qty, exist.qty]
      setQty(newQty)
      localStorage.setItem('cart', JSON.stringify(cart, item.qty));
    } else {
      const newCart = [...cart, item]
      item.qty = 1
      const newQty = [...qty, item.qty]
      setCart(newCart)
      setQty(newQty)
      localStorage.setItem('cart', JSON.stringify(newCart, item.qty));

    }

  }

  function removeFromCart(item) {
    if (item.qty == 1) {
      let index = cart.indexOf(item)
      const newCart = [...cart]
      newCart.splice(index, 1)
      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart));
    } else {
      item.qty = item.qty - 1
      const newQty = [...qty, item.qty]
      setQty(newQty)
    }
  }

  return (
    <div className="container">
      <Header cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Switch>
        <Route path="/" render={() => <Home
          addToCart={addToCart} />}
          exact
        />
        <Route path="/categories" render={() => <Categories
          addToCart={addToCart}
          trnro={trnro}
        />}
        />
        <Route path="/checkout" render={() => <Checkout
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          trnro={trnro}
          cart={cart}
        />}
        />
          <Route path="/details" render={() => <Details
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          trnro={trnro}
          cart={cart}
        />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
