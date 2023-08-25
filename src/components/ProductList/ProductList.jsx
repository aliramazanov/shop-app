import PropTypes from "prop-types";
import Product from "../Products/Product";
import "./productList.scss";

export default function ProductList({
  products,
  toggleFavourite,
  handleOpenModalButton,
  removeProduct,
  favourites,
  isBasketPage,
}) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product
          key={`${product.id}-${index}`}
          product={product}
          id={product.id}
          isBasketPage={isBasketPage}
          toggleFavourite={toggleFavourite}
          handleOpenModalButton={handleOpenModalButton}
          removeProduct={removeProduct}
          favourites={favourites}
        />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  toggleFavourite: PropTypes.func.isRequired,
  favourites: PropTypes.array.isRequired,
  isBasketPage: PropTypes.bool.isRequired,
};
