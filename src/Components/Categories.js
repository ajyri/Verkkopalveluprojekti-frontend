import React from 'react';
import Products from './Products.js';

export default function Categories({ trnro, addToCart, isLoaded }) {

    if (isLoaded === false) {
        return (
            <>
                <p>Loading...</p>
                {console.log(isLoaded)}
            </>
        )
    } else {
        return (

            <>
                {console.log(isLoaded)}
                <Products trnro={trnro} addToCart={addToCart} />
            </>

        )
    }
}
