import React from "react";
import PropTypes from "prop-types";
import Product from "../Products/Product";
import Button from "../Buttons/Button";
import FavButton from "../Buttons/FavButton";
import RemoveButton from "../Buttons/Remove";
import "./productList.scss";

export default function ProductList({
  products,
  handleOpenModalButton,
  toggleFavourite,
  removeProduct,
  favourites,
  isBasketPage,
}) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          imgPath={product.imgPath}
          SKU={product.SKU}
          backgroundColor={product.productColor}
        >
          <div className="buttons">
            <Button
              backgroundColor="black"
              text="Basket"
              onClick={() => handleOpenModalButton("modalOne", product)}
            />
            <FavButton
              onClick={() => toggleFavourite(product)}
              isFavourite={favourites.includes(product)}
            />
            {isBasketPage && (
              <RemoveButton onClick={() => removeProduct(product.id)} />
            )}
          </div>
        </Product>
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  toggleFavourite: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  favourites: PropTypes.array.isRequired,
  isBasketPage: PropTypes.bool.isRequired,
};
