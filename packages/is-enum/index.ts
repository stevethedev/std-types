export type Enum = Record<string, string | number> | Array<string | number>;

export default function isEnum<T extends Enum>(
  value: unknown,
  enumType: T,
): value is T[keyof T] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Object.values(enumType).includes(value as any);
}

export const getIsEnum = <T extends Enum>(
  enumType: T,
): ((value: unknown) => value is T[keyof T]) => {
  return (value: unknown): value is T[keyof T] => isEnum(value, enumType);
};
