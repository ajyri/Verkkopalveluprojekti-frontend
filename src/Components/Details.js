import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
const URL = 'http://localhost/verkkopalvelu/'

export default function Details({cart}) {

const [name, setName] = useState(null)
const [phone, setPhone] = useState(null)
const [details, setDetails] = useState(null)

function save(e) {
    e.preventDefault();
    let status = 0
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
            console.log(result)
            return result;
        })
        .then(result => {
            if(status === 200){
                console.log(status)
                console.log(result)
            }
            else{
                alert(result.error);
                console.log(result)
            }
        },
        error => console.log(error)
        )
    }
}

    return (
        <>
<form onSubmit={save}>
<div className="row g-3 mt-1">
  <div className="col-4">
    <input type="text" className="form-control pt-1" placeholder="Nimi" value={name} onChange={e => setName(e.target.value)} ></input>
    <input type="text" className="form-control pt-1 mt-3" placeholder="Puhelinnumero" value={phone} onChange={e => setPhone(e.target.value)}></input>
  </div>
  <div className="col-4">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Lisätietoja tilauksesta" value={details} onChange={e => setDetails(e.target.value)}></textarea>
  </div>
  <div className="col-4">
      <h4 className="">Yhteenveto tilauksesta:</h4>
      {cart.map(item => (
                    <div>
                        <span>{item.tuotenimi}</span> <span>{item.hinta * item.qty}</span>
                    </div>
            ))}
  </div>
  </div>
  <div className="row">
                <div className="col-1 py-1">
                <Link to={{
                                pathname:'/checkout'}} > <button className="btn btn-primary">Edellinen</button>
                                
                </Link>
                </div>
                <div className="col-8"></div>
                <div className="col-1">

                </div>
                <div className="col-2 text-end  py-1">
                <button className="btn btn-primary" type="submit">Tilaa tuotteet</button>
                </div>
            </div>
</form>
           
        </>
    )
}
