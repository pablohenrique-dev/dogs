import React from "react";
import styles from "./Error.module.css";

const Error = ({ error }) => {
  if (!error) return null;
  return <p className={styles.error + " fadeRight"}>{error}</p>;
};

export default Error;
