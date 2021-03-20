const updateArray = <T extends any>(array: T[], value: T, index: number) => {
  if (index === -1) return [...array, value];
  const clone = [...array];
  clone.splice(index, 1);
  return clone;
};
export const updateSimpleArray = <T extends TSimple>(
  array: T[],
  value: T
): T[] => {
  const index = array.indexOf(value);
  return updateArray(array, value, index);
};

export const updateObjectArray = <T extends {}>(
  array: T[],
  value: T,
  key: keyof T
): T[] => {
  const index = array.findIndex((item) => item[key] === value[key]);
  return updateArray(array, value, index);
};
