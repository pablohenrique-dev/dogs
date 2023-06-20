import React from "react";
import Head from "../../Components/Helpers/Head";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST_POST } from "../../api";
import Error from "../../Components/Error/Error";

const LoginLostPassword = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST_POST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      request(url, options);
    }
  }

  return (
    <div>
      <Head title="Perdi minha senha" description="Página de senha perdida" />
      <h1 className="detail">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4cu" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled text="Enviando..." />
          ) : (
            <Button text="Enviar Email" />
          )}
        </form>
      )}
      <Error error={error} />
    </div>
  );
};

export default LoginLostPassword;
