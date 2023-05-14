import React, { useState } from "react";
// import Image from "next/image";

import styles from "./index.module.css";

export const SearchInput: React.FC = ({ onChange, placeholder = "" }) => {
  const [value, setValue] = useState("");

  const onChangeInput = (e) => {
    onChange?.(e.target.value);
    setValue(e.target.value);
  };

  const clearInput = () => {
    onChange?.("");
    setValue("");
  };

  return (
    <div className={styles.searchWrapper}>
      <img
        src="/icons/search-icon.svg"
        width="30px"
        height="30px"
        className={styles.searchIcon}
      />
      <input
        placeholder={placeholder}
        value={value}
        className={styles.searchInput}
        onChange={onChangeInput}
      />
      <img
        src="/icons/close-circle.svg"
        width="30px"
        height="30px"
        className={styles.closeIcon}
        onClick={clearInput}
      />
    </div>
  );
};
