import React, {useState} from 'react'
import Cart from './Cart.js'

export default function Header() {
    const [cart, setCart] = useState([]);

    return (
        <>
            <header className="row">
                <div className="col-6 text-start border-start border-top border-dark pt-2 mb-1">
                    <img id="logo" className="img-fluid" src="/img/axlogo.png" alt="" />
                </div>
                <div className="col-6 text-end border-end border-top border-dark pt-3 ">
                    <a type='button' data-bs-target="#cartItems" data-bs-toggle="dropdown">
                        <Cart cart={cart} />
                    </a>
                    <div className="dropdown-menu" id="cartItems">
                         <ul>
                         <li>test</li>
                         </ul>
                         <form>
                             <button>Testings</button>
                         </form>
                    </div>   
                </div>
                <nav className=" m-0 navbar navbar-expand-lg border-bottom border-top border-start border-end border-dark ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Etusivu</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" >Kaikki tuotteet</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tuoteryhmät
                  </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Etsi tuotteita" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Etsi</button>
                        </form>
                    </div>
                </nav>
            </header>
        </>
    )
}
