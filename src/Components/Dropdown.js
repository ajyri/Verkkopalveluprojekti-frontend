import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


const URL = 'http://localhost/verkkopalvelu/';

export default function Dropdown() {
    const [category, setCategory] = useState([]);
    

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
        	setCategory(res);
            
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
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {category.map(category => (
                    <li key={category.trnro}>
                        <Link
                            className="dropdown-item" 
                            to={{
                                pathname:'/testi',
                                state: {
                                    trnro: category.trnro
                                    }
                                }}
                                >{category.trnimi}
                                </Link>
                                </li>
                ))}
            </ul>    
        </>
    )
}
