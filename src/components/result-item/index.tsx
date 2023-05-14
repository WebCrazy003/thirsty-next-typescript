import React, { useState } from "react";

import styles from "./index.module.css";

export const ResultItem: React.FC = ({ title, imgUrl }) => {
  return (
    <div className={styles.itemWrapper}>
      <img src={imgUrl} className={styles.avatarImg} />
      <span className={styles.itemTitle}>{title}</span>
      <img
        src="/icons/arrow-right.svg"
        width="30px"
        height="30px"
        className={styles.arrowIcon}
      />
    </div>
  );
};
