import "./Header.scss";
import React from "react";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <div className="header-component-wrapper">
      <h1>Hobby Shop</h1>
    </div>
  );
};

Header.propTypes = {
  favouritesCount: PropTypes.number.isRequired,
  basketCount: PropTypes.number.isRequired,
};

export default Header;
