import React, { useState, useEffect } from 'react'
import Cart from './Cart.js'
import Dropdown from './Dropdown.js';
import { Link } from 'react-router-dom';


export default function Header({cart, addToCart, removeFromCart, trnro, emptyRow, emptyCart, admin}) {
   


let total = 0    

    return (
        <>  
            
            <header className="row">

                {admin != null ? ( 
                    <>
                      <div className="col-12 ">
                            <div className="d-flex justify-content-end p-3">
                                <div className="m-1">
                                    <Link to={{
                                        pathname:'/admin'}} > <button className="btn shadow-none">Siirry ylläpitosivulle</button>    
                                    </Link>
                                </div>
                                <div className="m-1">
                                    <Link to={{
                                        pathname:'/logout'}} > <button className="btn shadow-none">Kirjaudu ulos</button>    
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>

                      ) : (
                        <></>
                      )  
                      } 
                
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
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tuoteryhmät
                                </a>
                                <Dropdown trnro={trnro}/>
                            </li>
                        </ul>
                        
                    </div>
                </nav>
                
                <div className="col-lg-6 col-md-6 col-6 align-self-md-end text-end pt-2 mb-1 dropend " onClick={e => e.stopPropagation()}>
                    <a type='button' data-bs-target="#cartItems" data-bs-toggle="dropdown">
                        <Cart count={cart} />
                    </a>
                    <div className="dropdown-menu drop-down-light-brown p-3" id="cartItems">
                        <ul className="text-center">
                            {cart.map(item => (
                                <li className="border-bottom border-dark" key={item.tuotenro}>
                                    {item.tuotenimi} {(item.hinta * item.qty).toFixed(2)}€
                                    <div className="fw-bold">
                                        < span type="button" className="ps-2 noselect" onClick={() => removeFromCart(item)}>-</span> {item.qty} <span type="button" className="noselect" onClick={() => addToCart(item)}>+</span>                                        <span type="button" className="noselect" onClick={() => emptyRow(item)}>X</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="text-center pt-1 fw-bold">
                        <p className="mb-0">Summa: {cart.forEach(item => {
                                total = total + (item.hinta * item.qty) 
                            })}
                            {total.toFixed(2)}€</p>
                        <p type="button" className="noselect mb-2 empty" onClick={() => emptyCart()}>Tyhjennä ostoskori</p>
                        </div>
                        
                        <div className="text-center">
                        <Link to={{
                                pathname:'/checkout'}} > <button className="btn btn-primary shadow-none">Kassalle </button>
                                
                        </Link>
                        </div>
                        
                    </div>
                    
                </div>
                
            </header>
        </>
    )
}

