import PropTypes from "prop-types";
import Button from "../Buttons/Button";
import FavButton from "../Buttons/FavButton";
import RemoveButton from "../Buttons/Remove";
import "./product.scss";

export default function Product({
  backgroundColor,
  toggleFavourite,
  handleOpenModalButton,
  isBasketPage,
  favourites,
  product,
  removeProduct,
}) {
  return (
    <div className={`product-component-wrapper ${backgroundColor}`}>
      <div className="product-image-wrapper">
        <img src={product.imgPath} alt="Product Image" />
      </div>
      <div className="product-info-actions">
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <span className="product-infos">
            <b>Price:</b> {product.price}$
          </span>
          <br />
          <span className="product-infos">
            <b>SKU: </b>
            {product.SKU}
          </span>
        </div>
        <div className="buttons">
          {!isBasketPage && (
            <Button
              backgroundColor="black"
              text="Basket"
              onClick={() => handleOpenModalButton("modalOne", product)}
            />
          )}
          {isBasketPage && (
            <RemoveButton onClick={() => removeProduct(product.id)} />
          )}
          <FavButton
            onClick={() => toggleFavourite(product)}
            isFavourite={favourites.some((item) => item.id === product.id)}
          />
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  backgroundColor: PropTypes.string,
  imgPath: PropTypes.string,
  toggleFavourite: PropTypes.func.isRequired,
  isBasketPage: PropTypes.bool,
  favourites: PropTypes.array.isRequired,
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    SKU: PropTypes.string.isRequired,
  }).isRequired,
};
