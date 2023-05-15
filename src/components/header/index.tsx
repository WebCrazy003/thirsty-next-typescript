import React from "react";
import styles from "./index.module.css";

type HeaderProps = {
  title: string;
  showNav: boolean;
};

export const Header: React.FC<HeaderProps> = ({ title, showNav }) => {
  return (
    <div className={styles.header}>
      {showNav && <div className={styles.headerNav}>Thirsty</div>}
      <span>{title}</span>
    </div>
  );
};
