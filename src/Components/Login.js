import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {


    return (
        <>
            <div className="row border-bottom border-start border-end border-dark pb-2" id="listing">
                <div className="centered-input">
                    <div className="col-auto mt-2">
                        <label htmlFor="inputUser" className="col-form-label">Syötä käyttäjätunnus:</label>
                        <input name="username" type="text" className="form-control" id="inputUser" aria-describedby="inputUser"/>
                    </div>
                    <div className="col-auto mt-2">
                        <label htmlFor="inputPassword" className="col-form-label">Syötä salasana:</label>
                        <input name="password" type="password" className="form-control" id="inputPassword" disabled/>
                    </div>
                    <div className="mt-3 col auto">
                        <Link to={{pathname:'/admin'}}><button type="submit" className="btn btn-primary mb-2">Kirjaudu</button>
                        </Link>
                    </div> 
                </div>
            </div>         
        </>
    )
}

