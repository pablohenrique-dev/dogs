import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/conta") setTitle("Minha conta");
    if (location.pathname === "/conta/estatisticas") setTitle("Estatísticas");
    if (location.pathname === "/conta/postar") setTitle("Postar foto");
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="detail">{title}</h1>
      <nav>
        <UserHeaderNav />
      </nav>
    </header>
  );
};

export default UserHeader;
