import React from "react";
import PropTypes from "prop-types";
import styles from "./episode.module.css";

const Episode = ({ date, excerpt, image, title, url }) => (
  <div className={styles.episode}>
    <h3>{title}</h3>
    <span className={styles.releaseDate}>Released {date}</span>
    <div className={styles.components}>
      <img
        src={`/${image}`}
        alt="In this episode image"
        className={styles.mainImage}
      />
      <div className={styles.excerpt}>
        <p>{excerpt}</p>
        <a className={styles.listenNow} href={url}>
          <span className={styles.playIcon}>►</span> Listen Now
        </a>
      </div>
    </div>
  </div>
);

Episode.propTypes = {
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Episode;
