import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.css";

const Layout = ({ children, linkToHomepage, theme }) => (
  <div className={styles.whiteBackground}>
    <Header linkToHomepage={linkToHomepage} theme={theme} />
    <div>
      <main className={styles.content}>{children}</main>
      <Footer theme={theme} />
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  linkToHomepage: PropTypes.bool,
  theme: PropTypes.string
};

export default Layout;
