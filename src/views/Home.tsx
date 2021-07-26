import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <h1 className="title is-2">Bienvenue sur l'E-boutique Henri Potier !</h1>

      <Link className="button is-primary" to="/products">
        Voir nos produits
      </Link>
    </section>
  );
};

export default Home;
