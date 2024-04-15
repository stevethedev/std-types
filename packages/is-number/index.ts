export interface Options {
  NaN?: boolean;
  Infinity?: boolean;
}

export default function isNumber(
  data: unknown,
  options?: Options,
): data is number {
  if (typeof data !== "number") {
    return false;
  }

  if (Number.isNaN(data)) {
    return Boolean(options?.NaN);
  }

  if (!Number.isFinite(data)) {
    return Boolean(options?.Infinity);
  }

  return true;
}

export type IsNumberFn = (data: unknown, options?: Options) => data is number;
export const getIsNumber =
  (defaultOptions?: Options): IsNumberFn =>
  (data, options): data is number =>
    isNumber(data, { ...defaultOptions, ...options });
