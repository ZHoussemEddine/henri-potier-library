import React from "react";
import { Product } from "./ProductModel";

interface BookProps {
  product: Product;
}

const Book: React.FC<BookProps> = ({ product }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by4">
          <img src={product.cover} alt={product.title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{product.title}</p>
            <p className="subtitle is-6">
              {product.price.toFixed(2)} €
              <button
                className="button is-info is-pulled-right"
                onClick={() => {}}
              >
                <span className="icon">
                  <i className="fas fa-cart-arrow-down"></i>
                </span>
                <span>Ajouter au panier</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
