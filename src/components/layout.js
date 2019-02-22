import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.whiteBackground}>
    <Header />
    <div>
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
