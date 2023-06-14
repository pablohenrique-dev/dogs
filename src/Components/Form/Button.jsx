import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, ...options }) => {
  return (
    <button className={styles.button} {...options}>
      {text}
    </button>
  );
};

export default Button;
