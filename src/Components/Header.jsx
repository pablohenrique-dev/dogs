import React from "react";
import styles from "./Header.module.css";
import DogSvg from "./DogSvg";
import { Link } from "react-router-dom";
import UsuarioSvg from "./UsuarioSvg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <Link className={styles.linkLogo} to="/">
          <DogSvg />
        </Link>

        <Link className={styles.link} to="login">
          Login / Criar <UsuarioSvg />
        </Link>
      </div>
    </header>
  );
};

export default Header;
