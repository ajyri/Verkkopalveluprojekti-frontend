import React, { useState, useEffect } from 'react';
import Get_orders from './Get_orders.js'
const URL = 'http://localhost/verkkopalvelu/';

export default function Edit_categories() {
  const [file, setFile] = useState(null);
  const [fileUpdated, setFileUpdated] = useState(null);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [trnro, setTrnro] = useState(1);
  const [newProductName, setNewProductName] = useState('');
  const [newProductDescription, setNewProductDescription] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newTrnro, setNewTrnro] = useState(null);
  const [categoryUpdated, setCategoryUpdated] = useState('');
  const [editedProduct, setEditedProduct] = useState(null);
  const [nameUpdated, setNameUpdated] = useState('');
  const [priceUpdated, setPriceUpdated] = useState('');
  const [descriptionUpdated, setDescriptionUpdated] = useState('');
  const [trnroUpdated, setTrnroUpdated] = useState('');
  const [editedImage, setEditedImage] = useState(false);


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
    fetch(URL + 'products.php?trnro=' + trnro)
      .then(res => {
        status = parseInt(res.status);
        return res.json()
      })
      .then(
        (res) => {
          if (status === 200) {
            setProducts(res)
            /* setTrnro(1) */
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
    fetch(URL + 'new_category.php', {
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
            setCategories(newCategory => [...newCategory, res]);
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

  function UpdateCategory(id) {
    let status = 0;
    fetch(URL + 'update_category.php', {
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
  }

  function Products(id) {
    let status = 0;
    fetch(URL + 'products.php?trnro=' + id)
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
    if (file === null) {
      alert('Et voi lisätä tuotetta ilman kuvaa!');
      return;
    } else if (newProductName === '' || newProductPrice === '' || newProductDescription === '') {
      alert('Täytä kaikki kentät');
      return;
    } else if (newTrnro === null) {
      alert('Valitse tuoteryhmä!');
      return;
    }  
    saveImage(e);
    let status = 0;

    fetch(URL + 'new_product.php', {
      method: 'POST',
      headers: {
        'Accept': 'application.json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        tuotenimi: newProductName,
        hinta: newProductPrice,
        kuvaus: newProductDescription,
        trnro: newTrnro,
        kuva: file.name
      })
    })
      .then(res => {
        status = parseInt(res.status);
        return res.json()
      })
      .then(
        (res) => {
          if (status === 200) {
            setProducts(newProduct => [...newProduct, res]);
            setNewProductDescription('');
            setNewProductName('');
            setNewTrnro(null);
            setNewProductPrice('');
            Products(newTrnro);
            setFile(null);
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
            setEditedProduct(null);
          } else {
            alert(res.error);
          }
        }, (error) => {
          alert(error);
        }
      )
  }

  function saveImage(e) {
    let status = 0;
    e.preventDefault();
    const formData = new FormData();
    if (file !== null) {
      formData.append('file', file);
    } else if (fileUpdated !== null) {
      formData.append('file', fileUpdated);
    }

    fetch('http://localhost/verkkopalvelu/add_picture.php',
      {
        method: 'POST',
        body: formData
      }
    )
      .then((res) => {
        status = parseInt(res.status)
        return res.json()
      })
      .then(
        (res) => {
          if (status === 200) {
          } else {
            alert(res.error)
          }
        },
        error => {
          alert(error)
        }
      )
  }

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleChange_2(e) {
    setFileUpdated(e.target.files[0]);
  }

  function editProduct(product) {
    setEditedProduct(product);
    setNameUpdated(product.tuotenimi);
    setPriceUpdated(product.hinta);
    setDescriptionUpdated(product.kuvaus);
    setTrnroUpdated(product.trnro);
  }

  function updateProduct(tuotenro) {
    let status = 0;
    fetch(URL + 'update_product.php', {
      method: 'POST',
      headers: {
        'Accept': 'application.json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        tuotenimi: nameUpdated,
        kuvaus: descriptionUpdated,
        tuotenro: tuotenro,
        hinta: priceUpdated,
        trnro: trnroUpdated
      })
    })
      .then(res => {
        status = parseInt(res.status);
        return res.json()
      })
      .then(
        (res) => {
          if (status === 200) {
            Products(trnro);
            setEditedProduct(null);
          } else {
            alert(res.error);
          }
        }, (error) => {
          alert(error);
        }
      )
  }

  function editImage() {
    setEditedImage(true);
  }

  function updateImage(tuotenro, e) {
    saveImage(e);
    let status = 0;
    fetch(URL + 'update_image.php', {
      method: 'POST',
      headers: {
        'Accept': 'application.json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        kuva: fileUpdated.name,
        tuotenro: tuotenro
      })
    })
      .then(res => {
        status = parseInt(res.status);
        return res.json()
      })
      .then(
        (res) => {
          if (status === 200) {
            setEditedImage(false);
            setFileUpdated(null);
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
        <div className="col-lg-4">
          <div className="col-auto mt-2">
            <h5 className="mt-2">Lisää uusi tuoteryhmä</h5>
            <input id="uusi_tr" type="text" className="form-control" aria-describedby="uusiTrnimi" placeholder="Syötä uuden tuoteryhmän nimi" value={newCategory} onChange={e => setNewCategory(e.target.value)} />
            <span className="p-2"><button onClick={saveCategory} className="btn shadow-none mt-2">Tallenna</button></span>
          </div>
          <h5 className="mt-2">Tuoteryhmät:</h5>
          {categories.map(category => (

            <div key={category.trnro} className="col-auto mt-2">
              <input defaultValue={category.trnimi} id="trnimi" type="text" key={category.trnro} className="form-control" aria-describedby="inputTrnimi" value={categories.trnimi} onChange={e => setCategoryUpdated(e.target.value)} />
              <span className="p-2"><button type="submit" onClick={() => UpdateCategory(category.trnro)} className="btn shadow-none mt-2">Tallenna</button></span>
              <span className="p-2"><button onClick={() => deleteCategory(category.trnro)} className="btn shadow-none mt-2 ">Poista</button></span>
              <span className="p-2"><button onClick={() => Products(category.trnro)} className="btn shadow-none mt-2 ">Tuotteet</button></span>
            </div>
          ))}

        </div>
        <div className="col-lg-4 mt-2">
          <h5>Lisää uusi tuote: </h5>
          <form action="submit" onSubmit={saveProducts}>
            <label htmlFor="img">Tuotekuva: </label>
            {file != null ? (
              <>
                <p>Nimi: {file.name}</p>
                <p>Tyyppi: {file.type}</p>
                <p>Koko: {Number((file.size) / 1000000).toFixed(2)} MT</p>
              </>

            ) : (
              <></>
            )
            }
            <input className="form-control" id="img" type="file" onChange={handleChange} />
            <label htmlFor="tuotenimi">Tuotenimi: </label>
            <input className="form-control" id="tuotenimi" type="text" value={newProductName} onChange={e => setNewProductName(e.target.value)} />
            <label htmlFor="hinta">Hinta: </label>
            <input className="form-control" id="hinta" type="number" value={newProductPrice} onChange={e => setNewProductPrice(e.target.value)} />
            <label htmlFor="kuvaus">Tuotekuvaus: </label>
            <textarea className="form-control" id="kuvaus" type="text" maxLength="255" value={newProductDescription} onChange={e => setNewProductDescription(e.target.value)} />
            <label htmlFor="kuva">Tuoteryhmä: </label>
            <div className="input-group">
                  <select className="form-control" id="inputGroupSelect01" onChange={e => setNewTrnro(e.target.value)}>
                    <label htmlFor="kuva">Tuoteryhmä: </label>
                    <option selected>Valitse Tuoteryhmä</option>
                    {categories.map(category => (
                       <option value={category.trnro}>{category.trnimi}</option>
                    ))}
                  </select>
                </div>
            <button className="btn shadow-none m-2">Lisää</button>

          </form>

          <ul className="mt-3">
            {products.map(product => (
              <li className="">{product.tuotenimi}
                <button onClick={() => deleteProduct(product.tuotenro)} className="btn shadow-none m-2">Poista</button>
                <button onClick={() => editProduct(product)} className="btn shadow-none m-2">Muokkaa</button>
              </li>
            ))}
          </ul>
        </div>
        {editedProduct != null ? (
          <>
            <div className="col-lg-4 mt-2">
              <h5>Muokkaa tuotetta: </h5>
              <label htmlFor="tuotenimi">Tuotenimi: </label>
              <input className="form-control" id="tuotenimi" type="text" value={nameUpdated} onChange={e => setNameUpdated(e.target.value)} />
              <label htmlFor="hinta">Hinta: </label>
              <input className="form-control" id="hinta" type="number" value={priceUpdated} onChange={e => setPriceUpdated(e.target.value)} />
              <label htmlFor="kuvaus">Tuotekuvaus: </label>
              <textarea className="form-control" id="kuvaus" type="text" maxLength="255" value={descriptionUpdated} onChange={e => setDescriptionUpdated(e.target.value)} />
              <label htmlFor="kuva">Tuoteryhmä: </label>
              <div className="input-group mb-3">
                  <select className="form-control" id="inputGroupSelect01" onChange={e => setTrnroUpdated(e.target.value)}>
                    <option value={trnroUpdated} selected>Säilytä nykyinen tuoteryhmä</option>
                    {categories.map(category => (
                       <option value={category.trnro}>{category.trnimi}</option>
                    ))}
                  </select>
                </div>

              <button onClick={() => updateProduct(editedProduct.tuotenro)} className="btn shadow-none m-1">Tallenna</button>
              <button onClick={() => setEditedProduct(null)} className="btn shadow-none m-1">Sulje muokkaamatta</button>
              <button onClick={() => editImage()} className="btn shadow-none m-1">Vaihda kuvaa</button>
              {editedImage != false ? (
                <>
                  <input className="form-control" id="img" type="file" onChange={handleChange_2} />
                  <button onClick={() => setEditedImage(false)} className="btn shadow-none m-1">Sulje muokkaamatta</button>
                  <button onClick={e => updateImage(editedProduct.tuotenro, e)} className="btn shadow-none m-1">Tallenna kuva</button>
                  {file != null ? (
                    <>
                      <label htmlFor="img">Tuotekuva: </label>
                      <p>Nimi: {file.name}</p>
                      <p>Tyyppi: {file.type}</p>
                      <p>Koko: {Number((file.size) / 1000000).toFixed(2)} MT</p>
                    </>

                  ) : (
                    <></>
                  )
                  }
                </>

              ) : (
                <></>
              )
              }
            </div>
          </>

        ) : (
          <></>
        )
        }
        <div className="col-lg-4 mt-2">
          <Get_orders/>
        </div>
      </div>
    </>
  )
}
