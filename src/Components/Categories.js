import React from 'react';
import Products from './Products.js';

export default function Categories({trnro, addToCart}) {
    console.log(trnro)
    return (
        <>
           <Products trnro={trnro} addToCart={addToCart}/> 
        </>

    )
}
