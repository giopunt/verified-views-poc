import React from "react";
import PropTypes from "prop-types";
import connectsLogo from "../images/connects-logo.png";
import mailLogo from "../images/e-mail.png";
import instagramLogo from "../images/instagram.png";
import styles from "./layout.module.css";
import stylesFooter from "./footer.module.css";

const Footer = ({ theme }) => (
  <footer className={`${stylesFooter.footer} ${stylesFooter[theme]}`}>
    <div className={styles.content}>
      <h3>ABOUT SEEN CONNECTS</h3>
      <p>
        At Connects we believe in doing influencer marketing differently. We
        don’t do badging exercises. We don’t choose influencers based purely on
        follower numbers. We develop real relationships between brands and
        influencers, to create authentic content that drives genuine connections
      </p>
      <img className={stylesFooter.connectsLogo} src={connectsLogo} />
      <ul className={stylesFooter.contacts}>
        <li className={stylesFooter.mail}>
          <img className={stylesFooter.socialIcon} src={mailLogo} />
          <a href="mailto:info@seenconnects.com">info@seenconnects.com</a>
        </li>
        <li className={stylesFooter.instagram}>
          <img className={stylesFooter.socialIcon} src={instagramLogo} />
          <a
            href="https://www.instagram.com/seenconnects/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @seenconnects
          </a>
        </li>
      </ul>
      <div className={stylesFooter.copyright}>
        Copyright © {new Date().getFullYear()} -{` `}
        <a
          href="http://seenconnects.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Seen Connects
        </a>
        . <br />
        All rights reserved.
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  theme: PropTypes.string
};

export default Footer;
