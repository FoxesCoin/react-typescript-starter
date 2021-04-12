import { deepClone, getObjectEntries } from './object';

const toggleItemInArray = <T extends any>(
  array: T[],
  value: T,
  index: number
) => {
  if (index === -1) {
    return [...array, value];
  }

  const clone = [...array];
  clone.splice(index, 1);
  return clone;
};

export const toggleItemInSimpleArray = <T extends TSimple>(
  array: T[],
  value: T
): T[] => {
  const index = array.indexOf(value);
  return toggleItemInArray(array, value, index);
};

export const toggleItemInObjectArray = <T extends {}>(
  array: T[],
  value: T,
  key: keyof T
): T[] => {
  const index = array.findIndex((item) => item[key] === value[key]);
  return toggleItemInArray(array, value, index);
};

export const updateObjectArray = <T extends {}>(parameters: {
  array: T[];
  newValues: Partial<T>;
  search: Partial<T>;
}): T[] => {
  const { array, newValues, search } = parameters;
  const index = array.findIndex((item) =>
    getObjectEntries(search).every(([key, value]) => item[key] === value)
  );

  if (index === -1) {
    return array;
  }

  const clone = deepClone(array);
  clone[index] = { ...clone[index], ...newValues };

  return clone;
};
