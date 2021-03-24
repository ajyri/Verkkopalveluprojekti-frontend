import React, {useState, useEffect} from 'react';

const URL = 'http://localhost/verkkopalvelu/'

export default function Items({trnro}) {
    // luodaan muuttujat kaikille tuotteille
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      let status = 0;
      fetch(URL + 'index.php')
      .then(res => {
        status = parseInt(res.status);
        return res.json()
      })
      .then(
        (res) => {
        	if (status === 200) {
            setProducts(res);
         
        	} else {
          alert(res.error);
        	}
        }, (error) => {
          alert(error);
        }
      )    
    }, [])
    return (
        <>
        <div id="listing" className="row border-bottom border-start border-end border-dark pb-2">
            <h2>Kaikki tuotteet:</h2>
            <div className="col-12  p-0 m-0">
            <ul className="list-group-horizontal list-group-flush" id="items">
                {products.map(item => (
                // Render item here..
                <li className="list-group-item img-fluid">
                <figure>
                    <img src="/img/kahvi_place.jpg" alt="" />
                    <p>{item.tuotenimi}</p>
                    <p>{item.kuvaus}</p>
                    <p>Hinta: {item.hinta} €</p>
                    <button className="btn">Lisää koriin</button>
                </figure>
                
                </li>
                ))}
            </ul>
            </div>
        </div>
        </>
    ) 
}