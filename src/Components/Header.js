import React, {useState} from 'react'
import Cart from './Cart.js'
import Dropdown from './Dropdown.js';

export default function Header({cart}) {

    return (
        <>
            <header className="row">
                <div className="col-md-3 col-sm-6 text-start border-start border-top border-dark pt-2 mb-1">
                    <img id="logo" className="img-fluid" src="/img/axlogo.png" alt="" />
                </div>
                <div className="col-md-6 order-md-3 col-sm-6  text-end border-end border-top border-dark pt-3 ">
                    <a type='button' data-bs-target="#cartItems" data-bs-toggle="dropdown">
                        <Cart count={cart}/>
                    </a>
                    <div className="dropdown-menu" id="cartItems">
                        {cart}
                    </div>   
                </div>
                <nav className=" col-md-3 order-md-1 col-sm-3 m-0 navbar navbar-expand-lg border-bottom border-top border-start border-end border-dark">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Etusivu</a>
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
            </header>
        </>
    )
}
