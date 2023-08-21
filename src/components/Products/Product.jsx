import React from "react";
import PropTypes from "prop-types";
import "./product.scss";

const Product = ({
  backgroundColor,
  imgPath,
  name,
  price,
  SKU,
  children,
  id,
}) => (
  <div className="product-component-wrapper" style={{ backgroundColor }}>
    <input type="hidden" value={id} id="productId" />
    <div className="product-image-wrapper">
      <img src={imgPath} alt="Product" />
    </div>
    <div className="product-info-actions">
      <div className="product-info">
        <h1 className="product-title">{name}</h1>
        <span className="product-infos">
          <b>Price:</b> {price}$
        </span>
        <br />
        <span className="product-infos">
          <b>SKU: </b>
          {SKU}
        </span>
      </div>
      <div className="product-actions">{children}</div>{" "}
    </div>
  </div>
);

Product.propTypes = {
  backgroundColor: PropTypes.string,
  imgPath: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  SKU: PropTypes.string,
  children: PropTypes.node, 
  id: PropTypes.number.isRequired,
};

export default Product;
