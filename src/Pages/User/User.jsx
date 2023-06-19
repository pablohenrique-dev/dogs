import React from "react";
import UserHeader from "./UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../../Components/Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { UserContext } from "../../userContext";
import Head from "../../Components/Helpers/Head";

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section className="container mainContainer">
      <Head
        title="Minha conta"
        description="Página minha conta, com feed de fotos"
      />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
