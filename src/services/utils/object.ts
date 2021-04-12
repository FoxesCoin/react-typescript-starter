export const getObjectValue = <T extends {}, K extends keyof T>(object: T) =>
  Object.values(object) as T[K][];

export const getObjectKeys = <T extends {}, K extends keyof T>(object: T) =>
  Object.keys(object) as K[];

export const getObjectEntries = <T extends {}, K extends keyof T>(object: T) =>
  Object.entries(object) as [K, T[K]][];

export const deepClone = <T extends any>(object: T): T => {
  if (null === object || object === undefined || 'object' !== typeof object) {
    return object;
  }

  if (object instanceof Date) {
    return new Date(object.getTime()) as T;
  }

  if (object instanceof Array) {
    return object.map(deepClone) as T;
  }

  if (object instanceof Object) {
    const copy = {} as any;
    getObjectKeys(object).forEach((key) => {
      copy[key] = deepClone(object[key]);
    });
    return copy;
  }

  throw new Error("Unable to copy object! Its type isn't supported.");
};
