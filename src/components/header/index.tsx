import React from "react";
import styles from "./index.module.css";

export const Header: React.FC = ({ title, showNav }) => {
  return (
    <div className={styles.header}>
      {showNav && <div className={styles.headerNav}>Thirsty</div>}
      <span>{title}</span>
    </div>
  );
};
