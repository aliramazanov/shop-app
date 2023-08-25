import PropTypes from "prop-types";
import ProductList from "../components/ProductList/ProductList";

import "./PageStyles.scss";

export default function Basket({
  basket,
  toggleFavourite,
  favourites,
  removeProduct,
}) {
  return (
    <div>
      <h2 className="pages-hero">Curated Delights Await in Your Basket</h2>
      <ProductList
        products={basket}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
        isBasketPage={true}
        removeProduct={removeProduct}
      />
    </div>
  );
}

Basket.propTypes = {
  basket: PropTypes.array.isRequired,
  toggleFavourite: PropTypes.func.isRequired,
  favourites: PropTypes.array.isRequired,
  removeProduct: PropTypes.func.isRequired,
};
