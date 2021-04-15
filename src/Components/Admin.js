import React, {useState, useEffect} from 'react'
import Products from './Products';

const URL = 'http://localhost/verkkopalvelu/';

export default function Admin() {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');
    const [products, setProducts] = useState([]);
    const [trnro, setTrnro] = useState(null);
    const [newProductName, setNewProductName] = useState('');
    const [newProductDescription, setNewProductDescription] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    const [newProductPicture, setNewProductPicture] = useState('kahvi_place.jpg');
    /* const [categoryUpdated, setCategoryUpdated] = useState(''); */
    
    useEffect(() => {
    
       let status = 0;
       fetch(URL + 'dropdown.php')
       .then(res => {
           status = parseInt(res.status);
           return res.json()
       })
       .then(
           (res) => {
           	if (status === 200) {
                setCategories(res)
           	} else {
           	 alert(res.error);
           	}
           }, (error) => {
           	alert(error)
           }
       ) 
    }, [newCategory])
    
    useEffect(() => {
    
      let status = 0;
      fetch(URL + 'products.php?trnro=1' )
      .then(res => {
          status = parseInt(res.status);
          return res.json()
      })
      .then(
          (res) => {
            if (status === 200) {
               setProducts(res)
               setTrnro(1)
            } else {
             alert(res.error);
            }
          }, (error) => {
            alert(error)
          }
      ) 
   }, [])
   
    function saveCategory(e) {
        e.preventDefault();
        let status = 0;
        if (newCategory === '') {
            alert("Syötä uuden tuoteryhmän nimi!")
            return;
        }
        fetch(URL + 'new_category.php',{
            method: 'POST',
            headers: {
            	'Accept': 'application.json',
            	'Content-type': 'application/json',
            },
            body: JSON.stringify({
            	trnimi: newCategory
            })
        })
        .then(res => {
            status = parseInt(res.status);
            return res.json()
        })
        .then(
            (res) => {
            	if (status === 200) {
            	    setCategories(newCategory=>[...newCategory, res]);
                    setNewCategory('');
            	} else {
                    alert(res.error);
            	}
            }, (error) => {
            	alert(error);
            }
        )    
    }
    
    function deleteCategory(id) {
        let status = 0;
        fetch(URL + 'delete_category.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            trnro: id
          })
        })
        .then(res => {
          status = parseInt(res.status);
          return res.json();
        })
        .then(
          (res) => {
            if (status === 200) {
              const newListWithoutRemoved = categories.filter((item) => item.trnro !== id);
              setCategories(newListWithoutRemoved);
            } else {
              alert(res.error);
            }
          }, (error) => {
            alert(error);
          }
        )
      }

    // Tämä vielä kovasti vaiheessa! Tehdään muokkaustoiminto myöhemmin jos keretään tai osataan
    /* function UpdateCategory(id) {
        
         
        let status = 0;
        fetch(URL + 'update_category.php',{
            method: 'POST',
            headers: {
            	'Accept': 'application.json',
            	'Content-type': 'application/json',
            },
            body: JSON.stringify({
            	trnimi: categoryUpdated,
                trnro: id
            })
        })
        .then(res => {
            status = parseInt(res.status);
            return res.json()
        })
        .then(
            (res) => {
            	if (status === 200) {
            	categories[(categories.findIndex(category => category.trnro === id))].trnimi = categoryUpdated
            	} else {
            	alert(res.error);
            	}
            }, (error) => {
            	alert(error);
            }
        )
    } */
    
    function Products(id) {
      let status = 0;
      fetch(URL + 'products.php?trnro='+ id)
      .then(res => {
        status = parseInt(res.status);
        return res.json()
      })
      .then(
        (res) => {
        	if (status === 200) {
        	  setProducts(res)
            setTrnro(id)
        	} else {
        	  alert(res.error);
        	}
        }, (error) => {
        	  alert(error)
        }
      )
    }

    function saveProducts(e) {
      e.preventDefault();
      let status = 0;
     /*  if (newCategory === '') {
          alert("Syötä uuden tuoteryhmän nimi!")
          return;
      } */
      fetch(URL + 'new_product.php',{
          method: 'POST',
          headers: {
            'Accept': 'application.json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            tuotenimi: newProductName,
            hinta: newProductPrice,
            kuvaus: newProductDescription,
            trnro: trnro,
            kuva: newProductPicture
          })
      })
      .then(res => {
          status = parseInt(res.status);
          return res.json()
      })
      .then(
          (res) => {
            if (status === 200) {
                setProducts(newProduct=>[...newProduct, res]);
                  setNewProductDescription('');
                  setNewProductName('');
                  setNewProductPicture('');
                  setNewProductPrice('');
            } else {
                  alert(res.error);
            }
          }, (error) => {
            alert(error);
          }
      )    
  }

  function deleteProduct(id) {
    let status = 0;
    fetch(URL + 'delete_product.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        tuotenro: id
      })
    })
    .then(res => {
      status = parseInt(res.status);
      return res.json();
    })
    .then(
      (res) => {
        if (status === 200) {
          const newListWithoutRemoved = products.filter((item) => item.tuotenro !== id);
          setProducts(newListWithoutRemoved);
        } else {
          alert(res.error);
        }
      }, (error) => {
        alert(error);
      }
    )
  }
    
    return (
        <>  
            <div className="row border-bottom border-start border-end border-dark pb-2" id="listing">
                <div className="col-lg-3">
                    <div className="col-auto mt-2">
                      <h5 className="mt-2">Lisää uusi tuoteryhmä</h5>   
                      <input id="uusi_tr" type="text" className="form-control" aria-describedby="uusiTrnimi" placeholder="Syötä uuden tuoteryhmän nimi" value={newCategory} onChange={e => setNewCategory(e.target.value)}/>
                      <span className="p-2"><button onClick={saveCategory} className="btn btn-primary mt-2">Tallenna</button></span>
                    </div>
                    <h5 className="mt-2">Tuoteryhmät:</h5>
                    {categories.map(category => (
                     
                         <div key={category.trnro} className="col-auto mt-2">
                            <input defaultValue={category.trnimi} id="trnimi" type="text" key={category.trnro} className="form-control" aria-describedby="inputTrnimi" disabled /* value={categoryUpdated} onSubmit={e => setCategoryUpdated(e.target.value)} *//>
                           {/*  <span className="p-2"><button type="submit" onClick={() => UpdateCategory(category.trnro)} className="btn btn-primary mt-2">Tallenna</button></span> */}
                            <span className="p-2"><button onClick={() => deleteCategory(category.trnro)} className="btn btn-primary mt-2 ">Poista</button></span>
                            <span className="p-2"><button onClick={() => Products(category.trnro)} className="btn btn-primary mt-2 ">Tuotteet</button></span>
                        </div>
                    ))}
                    
                </div>
                <div className="col-lg-3 mt-2">
                  <h5>Lisää uusi tuote: </h5>
                  <form action="submit" onSubmit={saveProducts}>
                  <label htmlFor="tuotenimi">Tuotenimi: </label>
                  <input className="form-control" id="tuotenimi" type="text" value={newProductName} onChange={e => setNewProductName(e.target.value)}/>
                  <label htmlFor="hinta">Hinta: </label>
                  <input className="form-control" id="hinta" type="number" value={newProductPrice} onChange={e => setNewProductPrice(e.target.value)}/>
                  <label htmlFor="kuva">Kuvan nimi: </label>
                  <input className="form-control" id="kuva" type="text" value={newProductPicture} onChange={e => setNewProductPicture(e.target.value)}/>
                  <label htmlFor="kuvaus">Tuotekuvaus: </label>
                  <textarea className="form-control" id="kuvaus" type="text" maxLength="255" value={newProductDescription} onChange={e => setNewProductDescription(e.target.value)}/>
                  <button className="btn btn-primary mt-2">Lisää</button>
                  </form>
                  <ul className="mt-3">
                    {products.map(product => (
                        <li className="">{product.tuotenimi} <button onClick={() => deleteProduct(product.tuotenro)} className="btn btn-primary mt-2">Poista</button>
                        </li>  
                    ))}
                  </ul>
                </div>

                              
            </div>    
        </>
    )
}
