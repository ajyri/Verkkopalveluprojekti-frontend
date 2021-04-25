import React from 'react'
import {useState ,useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
const URL = 'http://localhost/verkkopalvelu/'

export default function Order() {
    const {tilausnro} = useParams();
    const [order, setOrder] = useState([])
    useEffect(() => {
        let status = 0
        fetch(URL + 'get_order.php?tilausnro=' + tilausnro)
          .then(result => {
            status = parseInt(result.status)
            console.log(status)
            return result.json();
          })
          .then(
            result => {
              if (status === 200) {
                  console.log(result)
                  setOrder(result)
         
              } else {
                alert(result.error)
              }
            
            },
            error => {
              alert(error)
            }
          )
      },[])
    
      if(order.length === 0){
        return(
          <p>Loading...</p>
        )
      }else{
        return (
          <>
            <div>
                <h1>Tilauksen {tilausnro} tiedot</h1>
                <hr/>
                <p>Asiakasnimi: {order[0].asnimi}</p>  
                <p>Puhelinnumero: {order[0].aspuh}</p>
                <p>Tilauspäivämäärä: {order[0].tilauspvm}</p>
                <p>Lisätiedot: {order[0].lisatiedot}</p>
                <h4>Tuotteet:</h4>
                <ul>
                {order.map(order => (
                  <li>
                  <div>
                   <p className="mb-0">Tuotenimi: {order.tuotenimi} </p><p className="mb-0">kpl: {order.kpl} </p><p className="mb-0">Hinta: {Number(order.hinta).toFixed(2)}€</p> 
                  </div>
                  <hr/>
                  </li>
                ))}
              </ul>
              <Link to={{
                                pathname:'/admin'}} > <a className="link">Takaisin admin sivulle.</a>
                                
            </Link>
            </div>
            </>
        )
      }

}
