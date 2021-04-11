import React from 'react'
import { Link } from 'react-router-dom'

export default function Details() {
    return (
        <>
<form action="">
<div className="row g-3 mt-1">
  <div className="col-4">
    <input type="text" className="form-control" placeholder="First name" aria-label="First name"></input>
    <input type="text" className="form-control" placeholder="First name" aria-label="First name"></input>
    <input type="text" className="form-control" placeholder="First name" aria-label="First name"></input>
    <input type="text" className="form-control" placeholder="First name" aria-label="First name"></input>
  </div>
  <div className="col-4">
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"></input>
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"></input>
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"></input>
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"></input>
  </div>
  <div className="col-4">
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
  </div>
</div>
</form>
            <div className="row">
                <div className="col-1 py-1">
                <Link to={{
                                pathname:'/checkout'}} > <button className="btn btn-primary">Edellinen</button>
                                
                </Link>
                </div>
                <div className="col-8"></div>
                <div className="col-2">

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
