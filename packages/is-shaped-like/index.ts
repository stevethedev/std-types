import isFunction from "@std-types/is-function";
import isObject from "@std-types/is-object";

export type IsFn<T> = (value: unknown) => value is T;
export type Shape<T> = {
  [key in keyof T]: IsFn<T[key]>;
};

export default function isShapedLike<T>(
  value: unknown,
  shape: Shape<T>,
): value is T {
  if (!isObject(shape)) {
    throw new Error(`Expected object, got ${typeof shape}`);
  }

  if (!isObject(value)) {
    return false;
  }

  const symbolProperties = Object.getOwnPropertySymbols(shape) as Array<
    symbol & keyof T
  >;
  const stringProperties = Object.getOwnPropertyNames(shape) as Array<
    string & keyof T
  >;
  const properties = [...symbolProperties, ...stringProperties];

  return properties.every((key) => {
    const isFn = shape[key];
    if (!isFunction(isFn)) {
      throw new Error(`Expected function, got ${typeof isFn}`);
    }
    const val = value[key];
    return isFn(val);
  });
}

export const getIsShapedLike =
  <T>(shape: Shape<T>): IsFn<T> =>
  (value: unknown): value is T =>
    isShapedLike(value, shape);
