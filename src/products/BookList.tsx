import React, { useEffect, useState } from "react";
import Book from "./Book";
import { useProduct } from "./ProductContext";

const BookList = () => {
  const [stateProducts] = useProduct();

  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(
    stateProducts.products
  );

  useEffect(() => {
    setFilteredProducts(
      stateProducts.products.filter(product => product.title.includes(search))
    );
  }, [search, stateProducts.products]);

  return (
    <section className="section">
      <div className="columns">
        <div className="column">
          <h1 className="title is-2">Produits</h1>
        </div>

        <form className="column">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Chercher"
                onChange={e => {
                  setSearch(e.target.value);
                }}
                value={search}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
              </span>
            </p>
          </div>
        </form>
      </div>

      <div className="columns is-multiline">
      {stateProducts.loading === false ? (
          filteredProducts.map(product => (
            <div className="column is-one-quarter" key={product.isbn}>
              <Book key={product.isbn} product={product}></Book>
            </div>
          ))
      ) : (
        <div>Chargement en cours...</div>
      )}
      </div>
    </section>
  );
};

export default BookList;
