import React from "react";
import styles from "./Home.module.css";
import Feed from "../../Components/Feed/Feed";
import Head from "../../Components/Helpers/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Feed" description="Home do site dogs, com o feed de fotos" />
      <Feed />
    </section>
  );
};

export default Home;
