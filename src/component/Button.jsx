import React from "react";
import PropTypes from "prop-types";

function Button({ color, text, onClick }) {
  return (
    <button onClick={onClick} style={{ background: color }} className="btn">
      {text}
    </button>
  );
}
Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
