import React from "react";
import styles from "./Input.module.css";
import Error from "../Error/Error";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.containerInput}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Error error={error} />
      {/* {error && <p className={styles.error + " fadeRight"}>{error}</p>} */}
    </div>
  );
};
export default Input;
