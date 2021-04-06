import React, {useState, useEffect} from 'react';

const URL = 'http://localhost/verkkopalvelu/'

export default function Add() {

    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const items = [URL + 'index.php'];

}

