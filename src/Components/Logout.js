import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Logout({setAdmin, URL}) {
    useEffect(() => {
        async function logout () {
            const config = {
                method: 'GET',
                credentials: 'include'
            }
            const url = URL + 'admin_logout.php';
            try {
                await fetch(url, config);
                setAdmin(null);
            }
            catch(error) {
                alert(error);
            }
        }
        logout();
    }, [])


    return (
        <div className="row border-bottom border-start border-end border-dark pb-2" id="listing">
            <div className="centered-input">
                <h2 className="mt-2">Olet kirjautunut ulos</h2>
                <Link className="nav-link" to='/'>Siirry takaisin etusivulle</Link>
            </div>
        </div>
    )
}
