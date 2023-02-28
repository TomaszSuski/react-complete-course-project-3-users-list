import React from "react";
import PropTypes from "prop-types";
import styles from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";
import Backdrop from "./Backdrop";
import ReactDOM from 'react-dom';

const ModalOverlay = ({title, message, clearError}) => {
  return (
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
  );
};

export default function ErrorModal({ title, message, clearError }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={clearError} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={title} message={message} clearError={clearError} />, document.getElementById('overlay-root'))}
    </>
  );
}

ErrorModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  clearError: PropTypes.func.isRequired,
};

ModalOverlay.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  clearError: PropTypes.func.isRequired,
}