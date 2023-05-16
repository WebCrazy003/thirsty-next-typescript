import React, { useState, useEffect } from "react";

import { Layout, SearchInput, ResultItem } from "@components";
import styles from "@styles/drink.module.css";
import { useDebounce } from "@utils/hooks";

const Home: React.FC = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText, 500);

  useEffect(() => {
    const getResult = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${debouncedValue}`,
      );
      const { drinks } = await response.json();
      setSearchResult(drinks || []);
    };

    getResult();
  }, [debouncedValue]);

  return (
    <Layout pageTitle="Thirsty">
      <div className={styles.listWrapper}>
        <SearchInput
          onChange={(text) => setSearchText(text)}
          placeholder="Find a drink"
          defaultValue=""
        />
        <div className={styles.itemList}>
          {searchResult.map(({ strDrink, strDrinkThumb }) => (
            <ResultItem title={strDrink} imgUrl={strDrinkThumb} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
