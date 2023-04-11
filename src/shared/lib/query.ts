export const stringifyOrderToQuery = (option: string) =>
  `_sort=${option === 'DATE' ? 'start_date' : 'price'}&_order=asc`;

export const stringifyCategoriesToQuery = (categories: string[]) =>
  categories.map((i) => `categories_like=${i}`).join('&');
