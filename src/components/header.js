import React from "react";

import logo from "../images/logo.png";
import styles from "./layout.module.css";

const Header = () => (
  <div>
    <header className={styles.header} />
    <img className={styles.logo} src={logo} />
  </div>
);

export default Header;
