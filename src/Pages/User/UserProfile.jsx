import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../../Components/Feed/Feed";
import Head from "../../Components/Helpers/Head";

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container mainContainer">
      <Head title={user} description="Página perfil do usuário" />
      <h1 className="detail">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
