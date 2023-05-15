import React, { useEffect, useState } from "react";

import { Layout, SearchInput, ResultItem } from "@components";

const Home: React.FC = () => {
  const [searchResult, setSearchResult] = useState([]);

  console.log("searchResult:", searchResult);

  const onInputChange = async (searchText: string) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`,
    );
    const { drinks } = await response.json();
    setSearchResult(drinks || []);
  };

  return (
    <Layout pageTitle="Thirsty">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "100vh",
        }}
      >
        <SearchInput
          onChange={onInputChange}
          placeholder="Find a drink"
          defaultValue="mar"
        />
        <div
          style={{
            overflowY: "auto",
            maxHeight: "calc(100vh - 120px)",
          }}
        >
          {searchResult.map(({ strDrink, strDrinkThumb }) => (
            <ResultItem title={strDrink} imgUrl={strDrinkThumb} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
