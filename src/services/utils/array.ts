import { deepCopy, getObjectEntries } from './object';

export const removeItemInArray = <T extends any>(array: T[], index: number) => {
  if (index < 0 || index >= array.length) {
    return array;
  }

  const clone = deepCopy(array);
  clone.splice(index, 1);

  return clone;
};

export const toggleItemSimpleArray = <T extends string | number>(parameters: {
  array: T[];
  value: T;
}): T[] => {
  const { array, value } = parameters;
  const index = array.findIndex((item) => item === value);

  if (index === -1) {
    return [...array, value];
  }

  return removeItemInArray(array, index);
};

export const updateItemInArray = <T extends any>(parameters: {
  array: T[];
  index: number;
  newValue: T;
}) => {
  const { array, index, newValue } = parameters;

  if (index < 0 || index >= array.length) {
    return array;
  }
  const clone = deepCopy(array);
  clone[index] = newValue;

  return clone;
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
  const clone = deepCopy(array);
  clone[index] = { ...clone[index], ...newValues };

  return clone;
};

export const removeItemInObjectArray = <T extends {}>(
  array: T[],
  fields: Partial<T>
) => {
  const index = array.findIndex((item) =>
    getObjectEntries(fields).every(([key, value]) => item[key] === value)
  );

  if (index === -1) {
    return array;
  }

  const clone = deepCopy(array);
  clone.splice(index, 1);

  return clone;
};
