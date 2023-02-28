import React from "react";
import PropTypes from 'prop-types';
import styles from "./Backdrop.module.css";

const Backdrop = ({ onClick }) => (
  <div className={styles.backdrop} onClick={onClick}></div>
);

export default Backdrop;

Backdrop.propTypes = {
    onClick: PropTypes.func
}

Backdrop.defaultProps = {
    onClick: null
}