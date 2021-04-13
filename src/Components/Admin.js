import React, {useState, useEffect} from 'react'

const URL = 'http://localhost/verkkopalvelu/';

export default function Admin() {
    const [categories, setCategories] = useState([]);

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
    }, [])
    
    return (
        <>  
            <div className="row border-bottom border-start border-end border-dark pb-2" id="listing">
                <div className="col-lg-3">
                    <h5 className="mt-2">Muokkaa tuoteryhmiä</h5>
                    {categories.map(category => (
                         <div className="col-auto mt-2">
                            <input value={category.trnimi} name="trnimi" type="text" className="form-control" aria-describedby="inputTrnimi"/>
                            <span className="p-2"><button className="btn btn-primary mt-2">Tallenna</button></span>
                            <span className="p-2"><button className="btn btn-primary mt-2 ">Poista</button></span>
                        </div>
                    ))}
                    <div className="col-auto mt-2">
                    <h5 className="mt-2">Lisää uusi tuoteryhmä</h5>   
                    <input name="uusi_tr" type="text" className="form-control" aria-describedby="uusiTrnimi" placeholder="Syötä uuden tuoteryhmän nimi"/>
                    <span className="p-2"><button className="btn btn-primary mt-2">Tallenna</button></span>
                    </div>
                </div> 
                              
            </div>    
        </>
    )
}
