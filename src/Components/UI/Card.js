import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

export default function Card({ className, children }) {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  className: null,
};
