import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useState} from 'react'
const URL = 'http://localhost/verkkopalvelu/'

export default function Details({cart, emptyCart}) {

const [name, setName] = useState(null)
const [phone, setPhone] = useState(null)
const [details, setDetails] = useState(null)
const history = useHistory();

let total = 0
let status = 0
function save(e) {
    e.preventDefault();
    let kpl = [];
    let tuotenro = [];

    ( cart.forEach(item => {
        kpl.push(item.qty)
        tuotenro.push(item.tuotenro)
    }))

    if(name === null || phone === null){
        alert('Syötä nimi ja puhelinnumero.')
        return
    }else{
        fetch(URL + 'order.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                tuotenro: tuotenro,    
                kpl: kpl,
                tiedot: details,
                asiakas: name,
                aspuh: phone
                })
        })
        .then(result => {
            status = parseInt(result.status);
            return result;
        })
        .then(result => {
            if(status === 200){
            emptyCart()
            history.push("/confirm")
            }
            else{
                alert(result.error);
            }
        },error => alert(error) 
        
        )
    }
}

    return (
        <>
<form onSubmit={save}>
<div className="row g-3 mt-1">
  <div className="col-lg-4 col-md-4 col-12">
    <input type="text" className="form-control pt-1" placeholder="Nimi" value={name} onChange={e => setName(e.target.value)} ></input>
    <input type="text" className="form-control pt-1 mt-3" placeholder="Puhelinnumero" value={phone} onChange={e => setPhone(e.target.value)}></input>
  </div>
  <div className="col-lg-4 col-md-4 col-6">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Lisätietoja tilauksesta" value={details} onChange={e => setDetails(e.target.value)}></textarea>
  </div>
  <div className="col-lg-4 col-md-4 col-6 text-center">
      <h4 className="">Yhteenveto tilauksesta:</h4>
      {cart.map(item => (
                    <div>
                         <span>{item.qty} x </span><span>{item.tuotenimi}</span> <span> = {(item.hinta * item.qty).toFixed(2)}€</span>
                    </div>
            ))}
            <hr></hr>
       <p className="fw-bold">Summa: {cart.forEach(item => {
                                total = total + (item.hinta * item.qty) 
                            })}
                            {total.toFixed(2)}€</p>
  </div>
  </div>
  <div className="row">
                <div className="col-4 py-1">
                <Link to={{
                                pathname:'/checkout'}} >
                
                <button className="btn btn-primary">Edellinen</button>
                
                </Link>
                </div>
                <div className="col-3"></div>
                <div className="col-5 text-end py-1">
                <button className="btn" type="submit">Tilaa tuotteet</button>
                </div>
            </div>
</form>
           
        </>
    )
}
