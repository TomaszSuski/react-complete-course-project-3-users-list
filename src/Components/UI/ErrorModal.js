import React from "react";
import PropTypes from "prop-types";
import styles from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

export default function ErrorModal({ title, message, clearError }) {
  return (
    <div className={styles.backdrop} onClick={clearError}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={clearError}>
            Close
          </Button>
        </footer>
      </Card>
    </div>
  );
}

ErrorModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  clearError: PropTypes.func.isRequired,
};
