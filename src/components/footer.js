import React from "react";

import connectsLogo from "../images/connects-logo.png";
import styles from "./layout.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <h3>ABOUT SEEN CONNECTS</h3>
      <p>
        At Connects we believe in doing influencer marketing differently. We
        don’t do badging exercises. We don’t choose influencers based purely on
        follower numbers. We develop real relationships between brands and
        influencers, to create authentic content that drives genuine connections
      </p>
      <img className={styles.connectsLogo} src={connectsLogo} />
      <ul className={styles.contacts}>
        <li className={styles.mail}>
          <a href="mailto:info@seenconnects.com">info@seenconnects.com</a>
        </li>
        <li className={styles.instagram}>
          <a href="https://www.instagram.com/seenconnects/">@seenconnects</a>
        </li>
      </ul>
      <div className={styles.copyright}>
        Copyright © {new Date().getFullYear()} -{` `}
        <a href="http://seenconnects.com/">Seen Connects</a>. <br />
        All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
