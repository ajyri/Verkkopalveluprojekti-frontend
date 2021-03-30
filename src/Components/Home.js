import React from 'react'
import Products from './Products.js';


export default function Home({addToCart}) {
   

  return (
    <>
    <Products trnro="1" addToCart={addToCart}/>
    <Products trnro="2" addToCart={addToCart}/>
    <Products trnro="3" addToCart={addToCart}/>
    <Products trnro="4" addToCart={addToCart}/>
    </>
  )
}
