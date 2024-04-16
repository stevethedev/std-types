export default function isInstanceOf<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends abstract new (...args: any) => any,
>(value: unknown, instanceType: T): value is InstanceType<T> {
  return value instanceof instanceType;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IsInstanceOf<T extends abstract new (...args: any) => any> = (
  value: unknown,
) => value is InstanceType<T>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getIsInstanceOf = <T extends abstract new (...args: any) => any>(
  instanceType: T,
): IsInstanceOf<T> => {
  return (value: unknown): value is InstanceType<T> =>
    isInstanceOf(value, instanceType);
};
