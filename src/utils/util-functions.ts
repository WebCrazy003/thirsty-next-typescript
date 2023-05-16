import { ounceConvertTable } from "./constants";
import { DrinkType, IngredientType } from "./types";

const MAX_INGREDIENT = 15;

export const getIngredientList = (drink: DrinkType): IngredientType[] => {
  const ingredientList = [];
  for (let i = 0; i < MAX_INGREDIENT; i++) {
    const name = drink[`strIngredient${i + 1}`];
    const quantity = drink[`strMeasure${i + 1}`];

    if (name && quantity) {
      ingredientList.push({
        name,
        quantity,
        quantityNumber: null,
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      });
    }
  }
  return ingredientList;
};

const getQuantityInOunce = (quantity: string) => {
  const parts: string[] = quantity.split(" ");

  // check if the first part is numerical or not
  if (parts[0] && isNaN(parseFloat(parts[0]))) {
    return null;
  }

  if (parts[1] && isNaN(parseFloat(parts[1]))) {
    // if the second part is not numerical
    const convertRatio = ounceConvertTable[parts[1]?.toLowerCase()];
    return convertRatio ? eval(parts[0]) * convertRatio : null;
  } else {
    // if the second part is numerical
    const convertRatio = ounceConvertTable[parts[2]?.toLowerCase()];
    return convertRatio
      ? (eval(parts[0]) + eval(parts[1])) * convertRatio
      : null;
  }
};

export const getChartData = (
  ingredients: IngredientType[],
): IngredientType[] => {
  return ingredients
    .map(({ name, quantity, color }) => ({
      name,
      quantity: quantity,
      quantityNumber: quantity ? getQuantityInOunce(quantity) : null,
      color,
    }))
    .filter(({ quantityNumber }) => !!quantityNumber);
};
