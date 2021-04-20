import React from 'react'
import {Link} from 'react-router-dom'

export default function Checkout({ cart, removeFromCart, addToCart }) {
    const URL = 'http://localhost/verkkopalvelu/'
    let total = 0
    
    if(cart.length === 0){
        return (
            <>
                <div className="row border-bottom border-dark mt-1 text-center">
                    <p>Ostoskorisi on tyhjä</p>
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className="row border-bottom border-dark mt-1">
                    <div className="col-2 align-text-bottom ">
                        <p className="">Tuote:</p>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-2">
                        <p>Hinta:</p>
                    </div>
                    <div className="col-2">
                        <p>Määrä:</p>
                    </div>
                </div>
                {cart.map(item => (
                    <div className="row my-1 border-bottom border-dark">
                        <div className="col-1 thumbnail mb-1">
                            <img className="img-fluid" src={URL + 'img/' + item.kuva} alt=""/>
                        </div>
                        <div className="col-3">
                            <p>{item.tuotenimi}</p>
                        </div>
                        <div className="col-2">
                            <p>{(item.hinta * item.qty).toFixed(2)}€</p>
                        </div>
                        <div className="col-2">
                            < span type="button" className="ps-2 noselect " onClick={() => removeFromCart(item)}>-</span> {item.qty} <span type="button" className="noselect" onClick={() => addToCart(item)}>+</span>
                        </div>
    
                    </div>
                ))}
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-2 text-center">
                            <p className="p-0 mb-0">Tuotteet yhteensä:</p>
                            <p className=" p-0 mb-3 text-center">{cart.forEach(item => {
                                    total = total + (item.hinta * item.qty) 
                                })}
                                {total.toFixed(2)}€</p>
                    </div>
                    <div className="col-1 text-end py-1">
                    <Link to={{
                                    pathname:'/details'}} > <button className="btn btn-primary">Seuraava</button>
                                    
                    </Link>
                    </div>
                </div>
            </>
        )
    }
    
    }
    
  