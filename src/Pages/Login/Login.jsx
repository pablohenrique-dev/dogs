import React from "react";
import styles from "./Login.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginLostPassword from "./LoginLostPassword";
import LoginResetPassword from "./LoginResetPassword";
import { UserContext } from "../../userContext";

const Login = () => {
  const { logged } = React.useContext(UserContext);

  if (logged) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginLostPassword />} />
          <Route path="resetar" element={<LoginResetPassword />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
