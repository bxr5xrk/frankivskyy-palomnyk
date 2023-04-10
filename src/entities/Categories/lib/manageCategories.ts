export const createQueryForCategories = (categories: string[]) =>
  categories.map((i) => `categories_like=${i}`).join('&');

export const manageCategories = (
  activeCategories: string[],
  category: string
) => {
  const isCategoryExists = activeCategories.find((i) => i === category);

  return isCategoryExists
    ? [...activeCategories.filter((i) => i !== category)]
    : [...activeCategories, category];
};
