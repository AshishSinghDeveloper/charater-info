import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button/Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const OverlayModal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>{props.title}</header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop__root")
      )}
      {ReactDOM.createPortal(
        <OverlayModal
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay__root")
      )}
    </>
  );
};

export default ErrorModal;
