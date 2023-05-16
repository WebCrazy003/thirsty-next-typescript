import React, { ChangeEvent, useEffect, useState } from "react";

import styles from "./index.module.css";

type SearchInputProps = {
  onChange: (e: string) => void;
  defaultValue?: string;
  placeholder?: string;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  onChange,
  defaultValue = "",
  placeholder = "",
}) => {
  const [value, setValue] = useState(defaultValue);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setValue(e.target.value);
  };

  const clearInput = () => {
    onChange?.("");
    setValue("");
  };

  useEffect(() => onChange?.(value), []);

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
