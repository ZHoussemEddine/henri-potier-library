import {Link} from 'react-router-dom';
import logo from '../assets/book.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <figure className="image is-48x48">
            <img src={logo} alt='logo' />
          </figure>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>

            <Link className="navbar-item" to="/products">
              Produits
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-info badge has-badge-rounded has-badge-danger" data-badge={1} to="/cart">
                  <span className="icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                  <strong>Panier</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
