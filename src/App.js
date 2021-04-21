import { React, useEffect, useState } from 'react'
import './styles.css';
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import Footer from './Components/Footer.js'
import { Switch, Route, useLocation } from 'react-router-dom';
import Categories from './Components/Categories.js';
import Checkout from './Components/Checkout.js';
import Details from './Components/Details.js';
import Login from './Components/Login.js';
import Admin from './Components/Admin.js';
import Confirm from './Components/Confirm.js';
import Logout from './Components/Logout';
const URL = 'http://localhost/verkkopalvelu/'

function App() {
  
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState([]);
  const [trnro, setTrnro] = useState(null);
  const [products, setProducts] = useState([])
  const [admin, setAdmin] = useState(null);
  console.log(admin);
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

  useEffect(() => {
    let status = 0
    fetch(URL + 'index.php')
      .then(res => {
        status = parseInt(res.status)
        return res.json()
      })
      .then(
        res => {
          if (status === 200) {
            setProducts(res)
          } else {
            alert(res.error)
          }
        },
        error => {
          alert(error)
        }
      )
  },[])

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

  function emptyCart(){
    setCart([])
    setQty([])
  }

  function emptyRow(item){
    let index = cart.indexOf(item)
    const newCart = [...cart]
    newCart.splice(index,1)
    setCart(newCart)
    index = qty.indexOf(item)
    const newQty = [...qty]
    newQty.splice(index,1)
    setQty(newQty)
  }

  return (
    <div className="container">
      <Header cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} products={products} trnro={trnro} admin={admin} />
      <Header cart={cart} 
      addToCart={addToCart} 
      removeFromCart={removeFromCart}
      emptyRow={emptyRow}
      emptyCart={emptyCart}
      products={products} 
      trnro={trnro} />
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
          <Route path="/checkout" render={() => <Checkout
          cart={cart}
        />}
        />
          <Route path="/details" render={() => <Details
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          emptyCart={emptyCart}
          trnro={trnro}
          cart={cart}
        />}
        />
        <Route path="/login" render={() => <Login
        setAdmin={setAdmin}
        URL={URL}
        />
        }
        />
        <Route path="/admin" render={() => <Admin
        admin={admin}
        />
        }
        />
        <Route path="/confirm" render={() => <Confirm/>
        }
        />
        <Route path="/logout" render={() => <Logout
        setAdmin={setAdmin}
        URL={URL}
        />
        }
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
