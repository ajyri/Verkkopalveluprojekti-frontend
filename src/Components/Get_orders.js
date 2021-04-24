import React from 'react'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const URL = 'http://localhost/verkkopalvelu/'

export default function Get_orders() {

    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        let status = 0
        fetch(URL + 'get_orders.php')
          .then(result => {
            status = (result.status)
            console.log(status)
            return result.json()
          })
          .then(
            result => {
              if (status === 200) {
                  setOrders(result)
              } else {
                alert(result.error)
              }
            },
            error => {
              alert(error)
            }
          )
      }, [])
    
    return (
      <>
        <div>
          <h5>Tilaukset:</h5>
            <ul>
                {orders.map(order => (
                      <li>
                       <Link to={{
                                pathname:'/order',
                                state: {
                                  tilausnro: order.tilausnro
                                  }
                                }}> 
                       <a>{order.tilausnro}. {order.asnimi}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}
