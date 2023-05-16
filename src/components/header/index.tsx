import React from "react";
import Link from "next/link";
import Head from "next/head";

import styles from "./index.module.css";

type HeaderProps = {
  title: string;
  showNav: boolean;
};

export const Header: React.FC<HeaderProps> = ({ title, showNav }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.header}>
        {showNav && (
          <Link href="/">
            <div className={styles.navWrapper}>
              <img src="/icons/arrow-left.svg" className={styles.leftArrow} />
              <a className={styles.headerNav}>Thirsty</a>
            </div>
          </Link>
        )}
        <span>{title}</span>
      </div>
    </>
  );
};
