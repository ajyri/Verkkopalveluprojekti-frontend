import React from 'react'
import {Link} from 'react-router-dom'

export default function Checkout({ cart, removeFromCart, addToCart }) {
    const URL = 'http://localhost/verkkopalvelu/'
    let total = 0
    
    if(cart.length === 0){
        return (
            <>
                <div className="row border-dark mt-3 mb-3 text-center">
                    <h2>Ostoskorisi on tyhjä</h2>
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className="row border-bottom border-dark mt-1">
                    <div className="col-lg-2 col-md-2 col-2 text-center">
                        <p className="">Tuote:</p>
                    </div>
                    <div className="col-md-1 col-3 "></div>
                    <div className="col-md-3 col-3 text-center ">
                        <p>Hinta:</p>
                    </div>
                    <div className="col-md-3 col-3 text-center ">
                        <p>Hinta yhteensä:</p>
                    </div>
                    <div className="col-md-3 col-2 ">
                        <p>Määrä:</p>
                    </div>
                </div>
                {cart.map(item => (
                    <div className="row my-2 border-bottom border-dark">
                        <figure className="col-lg-2 col-md-2 col-sm-2 col-4 thumbnail mb-1 text-center">
                            <img className="img-fluid" src={URL + 'img/' + item.kuva} alt=""/>
                        <figcaption className="px-0 mx-0">{item.tuotenimi}</figcaption>
                        </figure>
                        <div className="col-1"></div>
                        <div className="col-3 col-md-3 text-center">
                            <p>{Number(item.hinta).toFixed(2)}€</p>
                        </div>
                        <div className="col-3 col-md-3 text-center">
                            <p>{(item.hinta * item.qty).toFixed(2)}€</p>
                        </div>
                        <div className="col-lg-3 col-md-4 col-3 ">
                            < span type="button" className="ps-2 noselect " onClick={() => removeFromCart(item)}>-</span> {item.qty} <span type="button" className="noselect" onClick={() => addToCart(item)}>+</span>
                        </div>  
                    </div>
                ))}
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <p className="p-0 m-0 text-center fw-bold">Tuotteet yhteensä:</p>
                            <p className=" p-0 mb-3 text-center fw-bold">{cart.forEach(item => {
                                    total = total + (item.hinta * item.qty) 
                                })}
                                {total.toFixed(2)}€</p>
                    </div>
                    <div className="col-lg-10 col-md-9 col-6 text-end py-1">
                    <Link to={{
                                    pathname:'/details'}} > <button className="btn btn-primary">Seuraava</button>
                                    
                    </Link>
                    </div>
                </div>
            </>
        )
    }
    
    }
    
  