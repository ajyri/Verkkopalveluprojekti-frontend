import React, {useState} from 'react'
import Cart from './Cart.js'
import Dropdown from './Dropdown.js';
import { Link } from 'react-router-dom';


export default function Header({cart}) {

    return (
        <>
            <header className="row">
                <div className="col-md-3 col-sm-7 text-start pt-2 mb-1">
                    <img id="logo" className="img-fluid" src="/img/axlogo.png" alt="" />
                </div>
                <nav className=" col-md-3 order-md-1 col-sm-6 col-6 m-0 align-self-end navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={{pathname:'/'}} >Etusivu</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tuoteryhmät
                                </a>
                                <Dropdown/>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="col-md-6 order-md-2 col-sm-6 col-6 align-self-md-end text-end pt-2 mb-1">
                    <a type='button' data-bs-target="#cartItems" data-bs-toggle="dropdown">
                        <Cart count={cart}/>
                    </a>
                    <div className="dropdown-menu" id="cartItems">
                        <ul>
                        {cart.map(item =>(
                            <li>
                                {item.tuotenimi} {item.qty} 
                            </li>
                        ))}
                        </ul>
                    </div>   
                </div>
            </header>
        </>
    )
}
