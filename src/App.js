import './App.css';



function App() {
  return (
    <div className="container">
      <header className="row">
        <div className="col-6 text-start border-start border-top border-dark pt-2 mb-1">
          <img id="logo" className="img-fluid" src="/img/kahvilalogo.png" alt=""/>
        </div>
        <div className="col-6 text-end border-end border-top border-dark pt-3 ">
            <img id="cart" className="img-fluid" src="/img/cart3.png" alt=""/>
        </div>
        <nav className=" m-0 navbar navbar-expand-lg border-bottom border-top border-start border-end border-dark ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Etusivu</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" >Kaikki tuotteet</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tuoteryhmät
                  </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Etsi tuotteita" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Etsi</button>
            </form>
          </div>
        </nav>
      </header>
      <div id="listing" className="row border-top border-start border-end border-dark">
        <h1>Kahvit:</h1>
      </div>
      <div id="listing" className="row border-bottom border-start border-end border-dark pb-2">
        <div className="col-12  p-0 m-0">
          <ul className="list-group-horizontal list-group-flush" id="items">
            <li className="list-group-item img-fluid"><img src="/img/kahvi_place.jpg" alt="" /></li>
            <li className="list-group-item img-fluid"><img src="/img/kahvi_place.jpg" alt="" /></li>
            <li className="list-group-item img-fluid"><img src="/img/kahvi_place.jpg" alt="" /></li>
            <li className="list-group-item img-fluid"><img src="/img/kahvi_place.jpg" alt="" /></li>
          </ul>

        </div>
      </div>
      <div id="listing" className="row border-top border-start border-end border-dark">
        <h1>Kaakaot:</h1>
      </div>
      <div id="listing" className="row border-bottom border-start border-end border-dark pb-2">
        <div className="col-12  p-0 m-0">
          <ul className="list-group-horizontal list-group-flush" id="items">
            <li className="list-group-item img-fluid"><img src="/img/kahvi_place.jpg" alt="" /></li>
            <li className="list-group-item img-fluid"><img src="/img/kahvi_place.jpg" alt="" /></li>
            <li className="list-group-item img-fluid"><img src="/img/kahvi_place.jpg" alt="" /></li>
            <li className="list-group-item img-fluid"><img src="/img/kahvi_place.jpg" alt="" /></li>
          </ul>

        </div>
      </div>
      <div id="listing" className="row border-top border-start border-end border-dark">
        <h1>Leivokset:</h1>
      </div>
      <div id="listing" className="row border-bottom border-start border-end border-dark pb-2">
        <div className="col-12  p-0 m-0">
          <ul className="list-group-horizontal list-group-flush" id="items">
            <li className="list-group-item img-fluid"><img src="/img/kahvi_place.jpg" alt="" /></li>
            <li className="list-group-item img-fluid"><img src="/img/kahvi_place.jpg" alt="" /></li>
            <li className="list-group-item img-fluid"><img src="/img/kahvi_place.jpg" alt="" /></li>
            <li className="list-group-item img-fluid"><img src="/img/kahvi_place.jpg" alt="" /></li>
          </ul>

        </div>
      </div>

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
    </div>
  );
}

export default App;
