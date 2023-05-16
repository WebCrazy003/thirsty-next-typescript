import React, { useState } from "react";

import { Layout, SearchInput, ResultItem } from "@components";
import styles from "@styles/drink.module.css";

const Home: React.FC = () => {
  const [searchResult, setSearchResult] = useState([]);

  const onInputChange = async (searchText: string) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`,
    );
    const { drinks } = await response.json();
    setSearchResult(drinks || []);
  };

  return (
    <Layout pageTitle="Thirsty">
      <div className={styles.listWrapper}>
        <SearchInput
          onChange={onInputChange}
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
