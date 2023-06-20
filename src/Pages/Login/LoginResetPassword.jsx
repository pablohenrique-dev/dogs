import React from "react";
import Head from "../../Components/Helpers/Head";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import useForm from "../../Hooks/useForm";
import { PASSWORD_RESET_POST } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../../Components/Error/Error";
import { useNavigate } from "react-router-dom";

const LoginResetPassword = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET_POST({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  return (
    <div>
      <Head title="Resetar senha" description="Página recriar senha" />
      <h1 className="detail">Reset a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled text="Resetando..." />
        ) : (
          <Button text="Resetar" />
        )}
      </form>
      <Error error={error} />
    </div>
  );
};

export default LoginResetPassword;
