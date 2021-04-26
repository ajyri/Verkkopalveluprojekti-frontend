import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'


export default function Login({setAdmin,URL}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    async function login(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('kayttajanimi', username);
        formData.append('salasana', password);
        const config = {
            method:'POST',
            credentials:'include',
            headers:{'Accept':'application/json',},
            body:formData
        }
        const response = await fetch (URL + 'admin_login.php',config);
        const json = await response.json();
        if (response.ok) {
            setAdmin(json);
            history.push("/admin");
        } else {
            alert('Virhe sisäänkirjautumisessa!')
        }
    }

    return (
        <>
            <form onSubmit={login}>
                <div className="row border-bottom border-start border-end border-dark pb-2" id="listing">
                    <div className="centered-input">
                        <div className="col-auto mt-2">
                            <label htmlFor="inputUser" className="col-form-label">Syötä käyttäjätunnus:</label>
                            <input name="kayttajanimi" type="text" className="form-control" id="kayttajanimi" aria-describedby="inputUser" value={username} onChange={e =>setUsername(e.target.value)} />
                        </div>
                        <div className="col-auto mt-2">
                            <label htmlFor="inputPassword" className="col-form-label">Syötä salasana:</label>
                            <input name="salasana" type="password" className="form-control" id="salasana" value={password} onChange={e =>setPassword(e.target.value)} />
                        </div>
                        <div className="mt-3 col auto">
                            <button type="submit" className="btn shadow-none mb-2">Kirjaudu</button>
                        </div> 
                    </div>
                 </div>
            </form>         
        </>
    )
}

