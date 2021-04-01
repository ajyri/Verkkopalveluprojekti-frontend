import React from 'react';
import Products from './Products.js';

export default function Testisivu({trnro, addToCart}) {
    return (
        <>
           <Products trnro={trnro} addToCart={addToCart}/> 
        </>
    )
}
