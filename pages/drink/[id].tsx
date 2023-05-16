import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Layout } from "@components";
import styles from "@styles/drink.module.css";
import type { DrinkType } from "@utils/types";
import { getChartData, getIngredientList } from "@utils/util-functions";

ChartJS.register(ArcElement, Tooltip, Legend);

type DetailProps = {
  drink: DrinkType;
};

const pieChartOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Detail: React.FC<DetailProps> = ({ drink }) => {
  const router = useRouter();
  const { id } = router.query;
  const { strDrink, strDrinkThumb, strInstructions } = drink;

  const ingredientList = useMemo(() => getIngredientList(drink), [drink]);

  const chartData = useMemo(
    () => getChartData(ingredientList),
    [ingredientList],
  );

  const data = useMemo(
    () => ({
      labels: chartData.map(({ name }) => name),
      datasets: [
        {
          data: chartData.map(({ quantityNumber }) => quantityNumber),
          backgroundColor: chartData.map(({ color }) => color),
        },
      ],
    }),
    [chartData],
  );

  return (
    <Layout pageTitle={id as string} showNav={true}>
      <div className={styles.detailWrapper}>
        <div className={styles.detailImage}>
          <Image src={strDrinkThumb} width={150} height={150} />
        </div>
        <span className={styles.drinkTitle}>{strDrink}</span>

        <div className={styles.ingredientWrapper}>
          <span className={styles.ingredientLabel}>Ingredients:</span>

          <div className={styles.ingredientInnerWrapper}>
            <div className={styles.ingredientList}>
              {ingredientList.map(({ name, quantity, color }) => (
                <div className={styles.legendRow}>
                  <span
                    style={{
                      backgroundColor: color,
                      width: 20,
                      minWidth: 20,
                      height: 20,
                      borderRadius: 3,
                      marginRight: 5,
                    }}
                  ></span>
                  <span>{`${name} (${quantity})`}</span>
                </div>
              ))}
            </div>

            <div className={styles.ingredientChart}>
              {chartData && chartData.length ? (
                <Pie
                  data={data}
                  options={pieChartOptions}
                  width={120}
                  height={120}
                />
              ) : (
                <div>No chart data</div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.instruction}>{strInstructions}</div>
      </div>
    </Layout>
  );
};

export default Detail;

export const getServerSideProps: GetServerSideProps<{
  drink?: DrinkType;
}> = async (context) => {
  const { params } = context;
  const { id } = params as { id: string };

  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`,
  );

  if (!response) return { props: {} };

  const { drinks } = await response.json();

  return { props: { drink: drinks?.[0] } };
};
