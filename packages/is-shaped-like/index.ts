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

export interface IsShapedLikeFn<T> {
  (value: unknown): value is T;
  readonly shape: Shape<T>;
  readonly extend: ExtendFn<T>;
}

export type ExtensionFn<T, U> = (shape: Shape<T>) => Shape<U>;
export interface ExtendFn<T> {
  <U>(extensionFn: ExtensionFn<T, U>): IsShapedLikeFn<U>;
  <U>(extension: Shape<U>): IsShapedLikeFn<Omit<T, keyof U> & U>;
}

export const getIsShapedLike = <T>(shape: Shape<T>): IsShapedLikeFn<T> => {
  const isFn = (value: unknown): value is T => isShapedLike(value, shape);
  function extend<U>(extensionFn: ExtensionFn<T, U>): IsShapedLikeFn<U>;
  function extend<U>(
    extensionShape: Shape<U>,
  ): IsShapedLikeFn<Omit<T, keyof U> & U>;
  function extend<U>(extensionFn: ExtensionFn<T, U> | Shape<U>) {
    if (isFunction(extensionFn)) {
      return getIsShapedLike(extensionFn(shape));
    }
    return getIsShapedLike({ ...shape, ...extensionFn });
  }
  return Object.assign(isFn, {
    extend,
    shape,
  });
};
