import React, {useState} from 'react';


export default function Footer() {

  const [address, setAddress] = useState(''); 
  const URL = 'http://localhost/verkkopalvelu/';
  
  function save(e) {
    e.preventDefault();
    let status = 0;
    fetch(URL + 'newsletter.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        sahkpost: address
      })
    })
    .then(res=> {
      status = parseInt(res.status);
      return res.json();
    })
    .then(
      (res) => {
        if (status === 200) {
          setAddress('');
        } else {
          alert(res.error);
        }
      }, (error) => {
        alert(error);
      }
    )
  } 

    return (
        <>
        <footer className="row">
        <div className="container text-center p-4 pb-0">
        <p className="pt-2 footer_info"><strong>Haluatko tietoa tarjouksista ja kamppanjoista?</strong></p>
    <form action="" onSubmit={save}>
     
      <div className="row subscribe">
        <div className="col-12">
          <div className="form-outline mb-4">
            <input type="email" id="subscribe" className="form-control" placeholder="Sähköpostiosoite" value={address} onChange={e =>setAddress(e.target.value)} />
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary sub_button">
            Tilaa uutiskirje
          </button>
        </div>
      </div>
    </form>
        </div>
      <div className="container p-4">
      <div className="row">
        <div className="col-lg-4 col-md-12 text-center" id="info1">
          <h5 className="footer_info text-uppercase">Kahvila ÄX</h5>

          <p className="footer_info">
           Paras ja hipein ja coolein ja hipsterein kahvila lähistöllä! Tule nauttimaan chillisti veli
          </p>
        </div>
   
        <div className="col-lg-4 col-md-12 text-center" id="info2">
          <h5 className="text-uppercase footer_info">Ota yhteyttä</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" class="footer_info info2">+358 40-421-6361</a>
            </li>
            <li>
              <a href="#!" class="footer_info info2">Jokukatu 5X</a>
            </li>
            <li>
              <a href="#!" class="footer_info info2">kahvilaäx@äx.fi</a>
            </li>
          </ul>
        </div>
      
        <div className="col-lg-4 col-md-12 text-center">
          <h5 className="text-uppercase footer_info">Sosiaalinen media</h5>
              <a href="#!" className="ms-3"><img className="social" src="/img/facebook.png" alt=""/></a>
              <a href="#!" className="ms-3"><img className="social" src="/img/instagram.png" alt=""/></a>
              <a href="#!" className="ms-3"><img className="social" src="/img/youtube.png" alt=""/></a>
              <a href="#!" className="ms-3"><img className="social" src="/img/twitter.png" alt=""/></a>
        </div>
      </div>
      </div>
      </footer>  
        </>
    )
}
