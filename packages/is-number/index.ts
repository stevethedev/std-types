export interface Options {
  NaN?: boolean;
  Infinity?: boolean;
}

export default (data: unknown, options?: Options): data is number => {
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
};
