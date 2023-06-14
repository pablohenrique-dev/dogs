import React from "react";
import styles from "./Image.module.css";
import PropTypes from "prop-types";

const Image = ({ alt, ...options }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.imageContainer}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...options} />
    </div>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  options: PropTypes.any,
};

export default Image;
