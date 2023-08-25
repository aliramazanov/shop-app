import PropTypes from "prop-types";
import "./Button.scss";

export default function RemoveButton({ onClick }) {
  return (
    <button className="remove-button" onClick={onClick}>
      Remove
    </button>
  );
}

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
