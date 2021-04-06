import React from 'react'

export default function Footer() {
    return (
        <>
        <footer className="row">
        <div class="container text-center p-4 pb-0">
        <p className="pt-2 footer_info"><strong>Haluatko tietoa tarjouksista ja kamppanjoista?</strong></p>
    <form action="">
     
      <div className="row subscribe">
        <div className="col-md-5 col-12 mb-4 mb-md-0">
          
          <div className="form-outline mb-4">
            <input type="email" id="subscribe" className="form-control" placeholder="Sähkopostiosoite" />
          </div>
        </div>
        <div className="col-auto mb-4 mb-md-0">
          <button type="submit" className="btn btn-primary mb-4">
            Tilaa uutiskirja
          </button>
        </div>
        </div>
        </form>
        </div>
        <div className="container p-4">
    
      <div className="row">
       
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="footer_info text-uppercase">Kahvila ÄX</h5>

          <p className="footer_info">
           Jotain paskaa siitä kuinka ollaan parempia kuin mikään muu kahvia myyvä yritys koska välitämme
           niin paljon meidän asiakkaistamme.
          </p>
        </div>
   
        <div className="col-lg-3 col-md-6">
          <h5 className="text-uppercase footer_info">Ota yhteyttä</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" class="footer_info">+358 40 420 6969</a>
            </li>
            <li>
              <a href="#!" class="footer_info">Jokukatu 5X</a>
            </li>
            <li>
              <a href="#!" class="footer_info">kahvilaäx@äx.fi</a>
            </li>
          </ul>
        </div>
      
        <div className="col-3">
          <h5 className="text-uppercase footer_info mb-0">Sosiaalinen media</h5>
              <a href="#!" class="footer_info"><img className="col-2 social" src="/img/facebook.png" alt=""/></a>
              <a href="#!" class="footer_info"><img className="col-2 social" src="/img/instagram.png" alt=""/></a>
              <a href="#!" class="footer_info"><img className="col-2 social" src="/img/youtube.png" alt=""/></a>
              <a href="#!" class="footer_info"><img className="col-2 social" src="/img/twitter.png" alt=""/></a>
        </div>
        
      </div>
      
    </div>
        
        
      </footer>  
        </>
    )
}
