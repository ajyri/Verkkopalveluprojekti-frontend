import React, {useState, useEffect} from 'react'

const URL = 'http://localhost/verkkopalvelu/';

export default function Admin() {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');
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

    // Tämä vielä kovasti vaiheessa!
/*     function UpdateCategory(id) {
        
         
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
    
    return (
        <>  
            <div className="row border-bottom border-start border-end border-dark pb-2" id="listing">
                <div className="col-lg-3">
                    <h5 className="mt-2">Muokkaa tuoteryhmiä</h5>
                    {categories.map(category => (
                         <div key={category.trnro} className="col-auto mt-2">
                            <input defaultValue={category.trnimi} id="trnimi" type="text" key={category.trnro} className="form-control" aria-describedby="inputTrnimi" /* value={categoryUpdated} onChange={e => setCategoryUpdated(e.target.value)} *//>
                            <span className="p-2"><button /* onClick={() => UpdateCategory(category.trnro)} */ className="btn btn-primary mt-2">Tallenna</button></span>
                            <span className="p-2"><button onClick={() => deleteCategory(category.trnro)} className="btn btn-primary mt-2 ">Poista</button></span>
                        </div>
                    ))}
                    <div className="col-auto mt-2">
                    <h5 className="mt-2">Lisää uusi tuoteryhmä</h5>   
                    <input id="uusi_tr" type="text" className="form-control" aria-describedby="uusiTrnimi" placeholder="Syötä uuden tuoteryhmän nimi" value={newCategory} onChange={e => setNewCategory(e.target.value)}/>
                    <span className="p-2"><button onClick={saveCategory} className="btn btn-primary mt-2">Tallenna</button></span>
                    </div>
                </div> 
                              
            </div>    
        </>
    )
}
