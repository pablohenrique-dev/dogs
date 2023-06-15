import React from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../userContext";
import Error from "../../Components/Error/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../../Components/Form/Button.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { loginUser, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      loginUser(username.value, password.value);
    }
  }

  return (
    <section className="fadeRight">
      <h1 className="detail">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input id="username" label="Usuário" type="text" {...username} />
        <Input id="password" label="Senha" type="password" {...password} />
        {loading ? (
          <Button disabled text="Carregando..." />
        ) : (
          <Button text="Entrar" />
        )}

        <Error error={error} />
      </form>
      <Link className={styles.lost} to="/login/perdeu">
        Esqueci minha senha
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p className={styles.cadastro}>
          Ainda não possui conta? Cadastre-se agora.
        </p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
