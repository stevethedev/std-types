export type IsFn<A> = (value: unknown) => value is A;

export default function isNoneOf<T, A>(value: T | A, isFn: IsFn<A>): value is T;
export default function isNoneOf<T, A, B>(
  value: T | A | B,
  isFn1: IsFn<A>,
  isFn2: IsFn<B>,
): value is T;
export default function isNoneOf<T, A, B, C>(
  value: T | A | B | C,
  isFn1: IsFn<A>,
  isFn2: IsFn<B>,
  isFn3: IsFn<C>,
): value is T;
export default function isNoneOf<T, A, B, C, D>(
  value: T | A | B | C | D,
  isFn1: IsFn<A>,
  isFn2: IsFn<B>,
  isFn3: IsFn<C>,
  isFn4: IsFn<D>,
): value is T;
export default function isNoneOf<T, A, B, C, D, E>(
  value: T | A | B | C | D | E,
  isFn1: IsFn<A>,
  isFn2: IsFn<B>,
  isFn3: IsFn<C>,
  isFn4: IsFn<D>,
  isFn5: IsFn<E>,
): value is T;
export default function isNoneOf<T>(
  value: T,
  ...isFn: Array<IsFn<T>>
): value is T {
  return isFn.every((fn) => !fn(value));
}

export function getIsNoneOf<T, A>(isFn: IsFn<A>): IsFn<T>;
export function getIsNoneOf<T, A, B>(isFn1: IsFn<A>, isFn2: IsFn<B>): IsFn<T>;
export function getIsNoneOf<T, A, B, C>(
  isFn1: IsFn<A>,
  isFn2: IsFn<B>,
  isFn3: IsFn<C>,
): IsFn<T>;
export function getIsNoneOf<T, A, B, C, D>(
  isFn1: IsFn<A>,
  isFn2: IsFn<B>,
  isFn3: IsFn<C>,
  isFn4: IsFn<D>,
): IsFn<T>;
export function getIsNoneOf<T, A, B, C, D, E>(
  isFn1: IsFn<A>,
  isFn2: IsFn<B>,
  isFn3: IsFn<C>,
  isFn4: IsFn<D>,
  isFn5: IsFn<E>,
): IsFn<T>;

export function getIsNoneOf<T>(...isFn: Array<IsFn<T>>): IsFn<T> {
  return (value: unknown): value is T => isFn.every((fn) => !fn(value));
}
