export const isThereElements = (arr: any[]) => (arr.length === 0 ? true : false);
export const isOverTheLength = (arr: any[], length: number) => (arr.length > length ? true : false);

export const getFirstElement = <T>(arr: T[]) => {
  if (isThereElements(arr)) return null;
  return arr[0];
};
