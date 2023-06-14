import React from "react";
import VisualizacaoSvg from "../Svgs/VisualizacaoSvg";
import styles from "./Post.module.css";
import PropTypes from "prop-types";
import Image from "../Image/Image";

const Post = ({ data }) => {
  return (
    <div className={`${styles.containerModal} zoomIn`}>
      <div className={styles.imgContainer}>
        <Image src={data.photo.src} alt={data.photo.title} />
      </div>
      <div className={styles.postInfos}>
        <div className={styles.author}>
          <span>@{data.photo.author}</span>
          <span>
            <VisualizacaoSvg color={"black"} />
            {data.photo.acessos}
          </span>
        </div>
        <h2 className={`${styles.title} detail`}>{data.photo.title}</h2>
        <div className={styles.dogInfos}>
          <span>{data.photo.peso} Kg</span>
          <span>{data.photo.idade} anos</span>
        </div>
        <ul className={styles.comments}>
          {data.comments.map((comment) => {
            return (
              <li key={comment["comment_ID"]}>
                <strong>{comment["comment_author"]}: </strong>
                <span>{comment["comment_content"]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

Post.propTypes = {
  data: PropTypes.object,
};

export default Post;
