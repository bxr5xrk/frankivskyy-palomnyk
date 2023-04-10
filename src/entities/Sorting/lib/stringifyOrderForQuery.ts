export const stringifyOrderToQuery = (option: string) =>
  `_sort=${option === 'DATE' ? 'start_date' : 'price'}&_order=asc`;
