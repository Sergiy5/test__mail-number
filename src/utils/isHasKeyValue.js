export const isHasKeyValue = object =>
  Object.fromEntries(Object.entries(object).filter(([key, value]) => value));
