import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import logo from "../images/logo.png";
import styles from "./header.module.css";

const Header = ({ linkToHomepage, theme }) => {
  const logoImage = <img className={styles.logo} src={logo} />;
  return (
    <div>
      <header className={`${styles.header} ${styles[theme]}`} />
      {linkToHomepage ? <Link to="/">{logoImage}</Link> : logoImage}
    </div>
  );
};

Header.propTypes = {
  linkToHomepage: PropTypes.bool,
  theme: PropTypes.string
};

export default Header;
