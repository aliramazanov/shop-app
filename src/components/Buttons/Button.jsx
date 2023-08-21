import "./Button.scss";
import PropTypes from "prop-types";

function Button({ backgroundColor, onClick, text }) {
  return (
    <button
      className="button-component"
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
