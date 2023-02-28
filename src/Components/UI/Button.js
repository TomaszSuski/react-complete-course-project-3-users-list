import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({ className, onClick, type, children }) {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: null,
  onClick: null,
  type: "button",
};
