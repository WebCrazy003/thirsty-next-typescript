import React from "react";

import { Header } from "..";
import styles from "./index.module.css";

type LayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
  showNav?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle,
  showNav = false,
}) => {
  return (
    <div className={styles.layout}>
      <Header title={pageTitle} showNav={showNav} />
      {children}
    </div>
  );
};
