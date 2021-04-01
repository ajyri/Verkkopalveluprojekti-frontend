import React from 'react';
import Products from './Products.js';

export default function Categories({trnro, addToCart}) {
    return (
        <>
           <Products trnro={trnro} addToCart={addToCart}/> 
        </>

    )
}
