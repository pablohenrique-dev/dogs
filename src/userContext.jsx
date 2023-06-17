import React from "react";
import { TOKEN_POST, USER_GET, VALIDATE_TOKEN } from "./api";
import { Navigate, useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [logged, setLogged] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogged(true);
  }

  async function loginUser(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const responseToken = await fetch(url, options);
      if (!responseToken.ok) throw new Error(`Error: Usuário inválido`);
      const { token } = await responseToken.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (err) {
      setError(err.message);
      setLogged(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = React.useCallback(async function () {
    setData(null);
    setLogged(null);
    setError(null);
    setLoading(null);
    window.localStorage.removeItem("token");
  }, []);

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = VALIDATE_TOKEN(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido!");
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogged(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ loginUser, data, userLogout, error, loading, logged }}
    >
      {children}
    </UserContext.Provider>
  );
};
