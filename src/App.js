import React from 'react'
import './styles.css';
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import Footer from './Components/Footer.js'

function App() {
  return (
    <div className="container">
    <Header/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
