import React from 'react'
import {Link} from 'react-router-dom'

export default function Confirm() {
    return (
        <div>
            <h1>Tilauksesi on vastaanotettu!</h1>
            <Link to={{
                                pathname:'/'}} > <a className="link">Palaa takaisin etusivulle</a>
                                
            </Link>
        </div>
    )
}
