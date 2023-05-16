import React from "react";
import Link from "next/link";

import styles from "./index.module.css";

type ResultItemProps = {
  title: string;
  imgUrl: string;
};

export const ResultItem: React.FC<ResultItemProps> = ({ title, imgUrl }) => {
  return (
    <Link href={`/drink/${encodeURIComponent(title)}`}>
      <a className={styles.link}>
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
      </a>
    </Link>
  );
};
