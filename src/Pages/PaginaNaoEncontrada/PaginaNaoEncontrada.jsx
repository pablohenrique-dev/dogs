import React from "react";
import styles from "./PaginaNaoEncontrada.module.css";

const PaginaNaoEncontrada = () => {
  return (
    <section className="container mainContainer">
      <h1 className={`${styles.erro} detail`}>
        Erro:
        <span className={styles.container}>
          <span className={styles.first}>4670</span>
          <span className={styles.second}>8950</span>
          <span className={styles.third}>4617</span>
        </span>
      </h1>
      <p className={styles.text}>Página não encontrada.</p>
    </section>
  );
};

export default PaginaNaoEncontrada;
