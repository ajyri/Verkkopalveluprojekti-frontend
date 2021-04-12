import React, { useState, useEffect } from 'react'
import Cart from './Cart.js'
import Dropdown from './Dropdown.js';
import { Link } from 'react-router-dom';
import Search from './Search.js';

const URL = 'http://localhost/verkkopalvelu/'

const productList = [
    { id: '1', name: 'Kahvi' },
    { id: '2', name: 'Tee' },
    { id: '3', name: 'Kaakao' },
    { id: '4', name: 'Leivos' },
]

const filterProducts = (productList, query) => {
    if (!query) {
        return productList;
    }

    return productList.filter((product) => {
        const productName = product.name.toLowerCase();
        return productName.includes(query);
    });
};


export default function Header({ cart, addToCart, removeFromCart }) {
let total = 0    

const {search} = window.location;
const query = new URLSearchParams(search).get('s');
const filteredproducts = filterProducts(productList, query);

    return (
        <>
            <header className="row">
                <div className="col-lg-3 col-md-7 text-start pt-2 mb-1">
                    <Link to={{ pathname: '/' }}><img id="logo" className="img-fluid" src="/img/axlogo.png" alt="" /></Link>
                </div>
                <nav className=" col-lg-3 col-md-6 col-6 m-0 align-self-end navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={{ pathname: '/' }} >Etusivu</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tuoteryhmät
                                </a>
                                <Dropdown />
                            </li>
                        </ul>
                        
                    </div>
                    <div className="col-12">
                        <Search />
                        <ul className="hidden">
                            {filteredproducts.map(product => (
                            <li key={product.key}>{product.name}</li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <div className="col-lg-6 col-md-6 col-6 align-self-md-end text-end pt-2 mb-1" onClick={e => e.stopPropagation()}>
                    <a type='button' data-bs-target="#cartItems" data-bs-toggle="dropdown">
                        <Cart count={cart} />
                    </a>
                    <div className="dropdown-menu" id="cartItems">
                        <ul className="text-center">
                            {cart.map(item => (
                                <li className="border-bottom border-dark" key={item.tuotenro}>
                                    {item.tuotenimi} {(item.hinta * item.qty).toFixed(1)}€
                                    <div>
                                        < span type="button" className="ps-2 noselect" onClick={() => removeFromCart(item)}>-</span> {item.qty} <span type="button" className="noselect" onClick={() => addToCart(item)}>+</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="text-center pt-1">
                        <p>Summa: {cart.forEach(item => {
                                total = total + (item.hinta * item.qty) 
                            })}
                            {total.toFixed(1)}€</p>
                        </div>
                        <div className="text-center">
                        <Link to={{
                                pathname:'/checkout'}} > <button className="btn btn-primary">Kassalle </button>
                                
                        </Link>
                        
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

