import React from "react";
import useFetch from "../Hooks/useFetch";
import styles from "./Home.module.css";
import VisualizacaoSvg from "../Components/Svgs/VisualizacaoSvg";

const Home = () => {
  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    request("https://dogsapi.origamid.dev/json/api/photo/?_total=16");
  }, [request]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Error...</p>;
  if (data) {
    return (
      <section className="container">
        <ul className={styles.postsContainer}>
          {data.map((post) => {
            if (post.src)
              return (
                <li className={styles.post} key={post.id}>
                  <img src={post.src} alt={post.title} />
                  <span className={styles.views}>
                    <VisualizacaoSvg />
                    {post.acessos}
                  </span>
                </li>
              );
          })}
        </ul>
      </section>
    );
  } else return null;
};

export default Home;
