import React from "react";
import useFetch from "../../Hooks/useFetch";
import styles from "./Home.module.css";
import VisualizacaoSvg from "../../Components/Svgs/VisualizacaoSvg";
import Modal from "../../Components/Modal/Modal";
import Loading from "../../Components/Loading/Loading";
import Image from "../../Components/Image/Image";

const Home = () => {
  const [modal, setModal] = React.useState(false);
  const [postId, setPostId] = React.useState(null);
  const { data, loading, error, request } = useFetch();

  function openModal() {
    setModal(true);
  }

  function handleIdPost({ target }) {
    setPostId(target.id);
  }

  React.useEffect(() => {
    request("https://dogsapi.origamid.dev/json/api/photo/?_total=16");
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <p>Error...</p>;
  if (data) {
    return (
      <>
        <Modal openModal={modal} setOpenModal={setModal} postId={postId} />
        <section className="container fadeRight">
          <ul className={styles.postsContainer}>
            {data.map((post) => {
              if (post.src)
                return (
                  <li onClick={openModal} className={styles.post} key={post.id}>
                    <Image src={post.src} alt={post.title} />
                    <span
                      onClick={handleIdPost}
                      id={post.id}
                      className={styles.views}
                    >
                      <VisualizacaoSvg color={"white"} />
                      {post.acessos}
                    </span>
                  </li>
                );
            })}
          </ul>
        </section>
      </>
    );
  } else return null;
};

export default Home;
