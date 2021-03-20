export const getObjectValue = <T extends {}, K extends keyof T>(object: T) =>
  Object.values(object) as T[K][];

export const getObjectKeys = <T extends {}, K extends keyof T>(object: T) =>
  Object.keys(object) as K[];

export const getObjectEntries = <T extends {}, K extends keyof T>(object: T) =>
  Object.entries(object) as [K, T[K]][];
