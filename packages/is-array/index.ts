export type TypedFunction<T> = (element: unknown) => element is T;

export default function isArray<T = unknown>(
  data: unknown,
  typingFunction?: TypedFunction<T>,
): data is T[] {
  if (!Array.isArray(data)) {
    return false;
  }

  if (typingFunction) {
    return data.every(typingFunction);
  }

  return true;
}

export const getIsArray = <T = unknown>(
  typingFunction?: TypedFunction<T>,
): TypedFunction<T[]> => {
  return (data: unknown): data is T[] => {
    return isArray(data, typingFunction);
  };
};
