import React from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import useFetch from "../../Hooks/useFetch";
import VisualizacaoSvg from "../Svgs/VisualizacaoSvg";

const Modal = ({ openModal, setOpenModal, postId }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    if (postId !== null) {
      request(`https://dogsapi.origamid.dev/json/api/photo/${postId}`);
    }
  }, [request, postId]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Error...</p>;
  if (data) {
    return (
      <div
        onClick={() => setOpenModal(false)}
        style={{ display: openModal ? "flex" : "none" }}
        className={styles.modal}
      >
        <div className={`${styles.containerModal} zoomIn`}>
          <img className={styles.img} src={data.photo.src} alt="" />
          <div className={styles.postInfos}>
            <div className={styles.author}>
              <span>@{data.photo.author}</span>
              <span>
                <VisualizacaoSvg color={"black"} />
                {data.photo.acessos}
              </span>
            </div>
            <h2 className={`${styles.title} detail`}>{data.photo.title}</h2>
          </div>
        </div>
      </div>
    );
  } else return null;
};

Modal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  id: PropTypes.string,
};

export default Modal;
