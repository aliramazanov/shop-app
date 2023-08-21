import React from "react";
import ProductList from "../components/ProductList/ProductList";
import PropTypes from "prop-types";
import "./PageStyles.scss";

export default function Favourites({ favourites, toggleFavourite }) {
  return (
    <div className="favourites-page">
      <h2 className="pages-hero">Discover Your Exquisite Collection</h2>
      <ProductList
        products={favourites}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
      />
    </div>
  );
}

Favourites.propTypes = {
  favourites: PropTypes.array.isRequired,
  toggleFavourite: PropTypes.func.isRequired,
};
