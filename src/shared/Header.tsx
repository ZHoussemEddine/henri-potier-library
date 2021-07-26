import logo from '../assets/book.png';


const Header = () => {
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <img src={logo}/>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Produits
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Panier</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
