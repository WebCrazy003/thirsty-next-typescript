export type DrinkType = {
  strDrink: string;
  strDrinkThumb: string;

  [key: string]: string;
};

export type IngredientType = {
  name: string;
  quantity: string;
  quantityNumber: number | null;
  color: string;
};
