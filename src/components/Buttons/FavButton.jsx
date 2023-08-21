import PropTypes from "prop-types";
import "./Button.scss";

function FavButton({ isFavourite, onClick }) {
  return (
    <button
      className={`custom-button ${isFavourite ? "favourite" : ""}`}
      onClick={onClick}
    >
      {isFavourite ? "★" : "☆"}
    </button>
  );
}

FavButton.propTypes = {
  isFavourite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FavButton;
