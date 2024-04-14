// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isFunction<T extends (...args: any[]) => any>(
  variable: unknown,
): variable is T {
  return typeof variable === "function";
}
