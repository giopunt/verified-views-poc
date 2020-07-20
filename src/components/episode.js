import React from "react";
import PropTypes from "prop-types";
import showdown from "showdown";

import styles from "./episode.module.css";

const converter = new showdown.Converter();

const Episode = ({ date, excerpt, image, title, url }) => (
  <div className={styles.episode}>
    <div className={styles.components}>
      <a
        href={url}
        className={`${styles.clickable} ${styles.linkedImage}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`${image}`}
          loading="lazy"
          alt="In this episode image"
          className={styles.mainImage}
        />
      </a>
      <div className={styles.content}>
        <h3>
          <a
            href={url}
            className={styles.clickable}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h3>
        <span className={styles.releaseDate}>Released {date}</span>
        <div className={styles.excerpt}>
          <p
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(excerpt)
            }}
          ></p>
          <a
            className={styles.listenNow}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.playIcon}>►</span> Listen Now
          </a>
        </div>
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
