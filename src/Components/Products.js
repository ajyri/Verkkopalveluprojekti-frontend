import React, { useState, useEffect } from 'react'
const URL = 'http://localhost/verkkopalvelu/'

export default function Products ({ trnro, addToCart }) {
  // luodaan muuttujat kaikille tuotteille

  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])

  useEffect(() => {
    let status = 0
    fetch(URL + 'categories.php?trnimi=' + trnro)
      .then(res => {
        console.log(trnro)
        status = parseInt(res.status)
        return res.json()
      })
      .then(
        res => {
          if (status === 200) {
            setCategory(res)
          } else {
            alert(res.error)
          }
        },
        error => {
          alert(error)
        }
      )
  }, [trnro])

  useEffect(() => {
    let status = 0
    console.log(trnro)
    fetch(URL + 'products.php?trnro=' + trnro)
      .then(res => {
        status = parseInt(res.status)
        return res.json()
      })
      .then(
        res => {
          if (status === 200) {
            setProducts(res)
          } else {
            alert(res.error)
          }
        },
        error => {
          alert(error)
        }
      )
  }, [trnro])

  return (
    <>
      <div
        id='listing'
        className='row border-dark pb-2'
      >
        <h2>{category.map(category => category.trnimi)}</h2>
        <div className="container-fluid">
          <div className="row flex-row flex-nowrap overflow-auto cards-container">
          {products.map(item => (
          // Render item here..

              <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 card-group pb-3'>
                <div key={item.tuotenro} className='card'>
                  <img
                    src={URL + 'img/' + item.kuva}
                    className='card-img-top img-fluid'
                    alt=''
                  />
                  <div className='card-body d-flex flex-column'>
                    <div className='card-title row'>
                      <h5 className='col-lg-8 col-md-7 col-sm-6 col-9'>{item.tuotenimi} </h5>{' '}
                      <h5 className='col-lg-4 col-md-5 col-sm-6 col-3 card-text-right'> {Number(item.hinta).toFixed(2)} ???</h5>
                    </div>
                    <p className='card-text'>{item.kuvaus}</p>

                    <button
                      className='btn mt-auto shadow-none'
                      onClick={() => addToCart(item)}
                    >
                      Lis???? koriin
                    </button>
                  </div>
                </div>
              </div>
   
        ))}
        </div>
        </div>
      </div>
    </>
  )
}
