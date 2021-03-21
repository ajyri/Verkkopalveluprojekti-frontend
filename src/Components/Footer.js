import React from 'react'

export default function Footer() {
    return (
        <>
        <footer className="row">
        <div className="text-start col-6 pt-1 pb-2 ps-3">
        <ul>
          <li><a href="">Yhteystiedot</a></li>
          <li><a href="">Aukioloajat</a></li>
        </ul>
        </div>
        
        <div className="text-end col-6 pt-1 pb-2 pe-3">
          <ul>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>
      </footer>  
        </>
    )
}
