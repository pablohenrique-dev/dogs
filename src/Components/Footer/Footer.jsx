import React from "react";
import styles from "./Footer.module.css";
import DogSvg from "../Svgs/DogSvg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <DogSvg color="#764701" />
      </Link>
      <span className={styles.span}>Dogs. Alguns direitos reservados.</span>
    </footer>
  );
};

export default Footer;
