import React from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../userContext";
import useFetch from "../../Hooks/useFetch";
import Error from "../../Components/Error/Error";
import Head from "../../Components/Helpers/Head";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { loginUser } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleCreateUser(e) {
    e.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) loginUser(username.value, password.value);
  }

  return (
    <section className="fadeRight">
      <Head title="Cadastre-se" description="Página de cadastro do usuário" />
      <h1 className="detail">Cadastre-se</h1>
      <form onSubmit={handleCreateUser}>
        <Input label="Usuário" type="text" name="usuario" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled text="Cadastrando..." />
        ) : (
          <Button text="Cadastrar" />
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
