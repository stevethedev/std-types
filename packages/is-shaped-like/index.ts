import type { StdObject } from "@std-types/is-object";
import isObject from "@std-types/is-object";

export type IsFn<T> = (value: unknown) => value is T;
export type Shape<T> = {
  [key in keyof T]: IsFn<T[key]>;
};

export default function isShapedLike<T extends StdObject>(
  value: unknown,
  shape: Shape<T>,
): value is T {
  if (!isObject(value)) {
    return false;
  }

  const symbolProperties = Object.getOwnPropertySymbols(shape);
  const stringProperties = Object.getOwnPropertyNames(shape);
  const properties = [...symbolProperties, ...stringProperties];

  return properties.every((key) => {
    const isFn = shape[key];
    const val = value[key];
    return isFn(val);
  });
}

export const getIsShapedLike =
  <T extends StdObject>(shape: Shape<T>): IsFn<T> =>
  (value: unknown): value is T =>
    isShapedLike(value, shape);
