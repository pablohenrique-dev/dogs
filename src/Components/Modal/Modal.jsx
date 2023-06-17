import React from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import useFetch from "../../Hooks/useFetch";
import Post from "../PostModal/Post";
import Loading from "../Loading/Loading";

const Modal = ({ openModal, setOpenModal, postId }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    if (postId !== null) {
      request(`https://dogsapi.origamid.dev/json/api/photo/${postId}`);
    }
  }, [request, postId]);

  function handleCloseModal({ target }) {
    if (target.id === "modal") setOpenModal(false);
  }

  if (loading) return <Loading />;
  if (error) return <p>Error...</p>;
  if (data) {
    return (
      <div
        id="modal"
        onClick={handleCloseModal}
        style={{ display: openModal ? "flex" : "none" }}
        className={styles.modal}
      >
        <Post data={data} />
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
