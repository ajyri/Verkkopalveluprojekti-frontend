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
        className='row border-bottom border-start border-end border-dark pb-2'
      >
        <h2>{category.map(category => category.trnimi)}</h2>
        <div className="container-fluid">
          <div className="row flex-row flex-nowrap overflow-auto">
        {products.map(item => (
          // Render item here..

              <div className='col-lg-3 col-md-4 col-sm-6 card-group'>
                <div key={item.tuotenro} className='card mb-3'>
                  <img
                    src={URL + 'img/' + item.kuva}
                    className='card-img-top'
                    alt=''
                  />
                  <div className='card-body d-flex flex-column'>
                    <div className='card-title row'>
                      <h5 className='col-8'>{item.tuotenimi} </h5>{' '}
                      <h5 className='col-4 card-text-right'> {item.hinta} €</h5>
                    </div>
                    <p className='card-text'>{item.kuvaus}</p>

                    <button
                      className='btn mt-auto'
                      onClick={() => addToCart(item)}
                    >
                      Lisää koriin
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
