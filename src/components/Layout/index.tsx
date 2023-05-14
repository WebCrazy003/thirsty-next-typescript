import React from "react";

import { Header } from "..";
import styles from "./index.module.css";

export const Layout: React.FC = ({ children, pageTitle, showNav = false }) => {
  return (
    <div className={styles.layout}>
      <Header title={pageTitle} showNav={showNav} />
      {children}
    </div>
  );
};
