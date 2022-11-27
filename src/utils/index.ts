export const isNil = (val: any): boolean => {
  return ["", null, undefined].includes(val);
};