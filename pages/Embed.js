import React from "react";
import styles from '../styles/embed.module.css';

const Embed = (props) => (
  <div className={styles.card}>
    <iframe
      src={`https://www.youtube.com/embed/${props.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className={styles.frame}
    />
  </div>
);

export default Embed;