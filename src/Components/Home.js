import React, {useState, useEffect} from 'react';
import Products from './Products.js';

const URL = 'http://localhost/verkkopalvelu/';

export default function Home({addToCart}) {
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
        	setCategories(res);
        	} else {
            alert(res.error);
        	}
        }, (error) => {
        	alert(error);
        }
    )
}, []);

  return (
    <>
    {categories.map(category => (
      <Products trnro={category.trnro} addToCart={addToCart}/>
    ))}
    
    </>
  )
}
