export type IsFn<A> = (value: unknown) => value is A;

export default function isAllOf<A>(value: unknown, isFn: IsFn<A>): value is A;
export default function isAllOf<A, B>(
  value: unknown,
  isFn1: IsFn<A>,
  isFn2: IsFn<B>,
): value is A & B;
export default function isAllOf<A, B, C>(
  value: unknown,
  isFn1: IsFn<A>,
  isFn2: IsFn<B>,
  isFn3: IsFn<C>,
): value is A & B & C;
export default function isAllOf<A, B, C, D>(
  value: unknown,
  isFn1: IsFn<A>,
  isFn2: IsFn<B>,
  isFn3: IsFn<C>,
  isFn4: IsFn<D>,
): value is A & B & C & D;
export default function isAllOf<A, B, C, D, E>(
  value: unknown,
  isFn1: IsFn<A>,
  isFn2: IsFn<B>,
  isFn3: IsFn<C>,
  isFn4: IsFn<D>,
  isFn5: IsFn<E>,
): value is A & B & C & D & E;
export default function isAllOf<T>(
  value: unknown,
  ...isFn: Array<IsFn<T>>
): value is T {
  return isFn.every((fn) => fn(value));
}

export function getIsAllOf<A>(isFn: IsFn<A>): IsFn<A>;
export function getIsAllOf<A, B>(isFn1: IsFn<A>, isFn2: IsFn<B>): IsFn<A & B>;
export function getIsAllOf<A, B, C>(
  isFn1: IsFn<A>,
  isFn2: IsFn<B>,
  isFn3: IsFn<C>,
): IsFn<A & B & C>;
export function getIsAllOf<A, B, C, D>(
  isFn1: IsFn<A>,
  isFn2: IsFn<B>,
  isFn3: IsFn<C>,
  isFn4: IsFn<D>,
): IsFn<A & B & C & D>;
export function getIsAllOf<A, B, C, D, E>(
  isFn1: IsFn<A>,
  isFn2: IsFn<B>,
  isFn3: IsFn<C>,
  isFn4: IsFn<D>,
  isFn5: IsFn<E>,
): IsFn<A & B & C & D & E>;

export function getIsAllOf<T>(...isFn: Array<IsFn<T>>): IsFn<T> {
  return (value: unknown): value is T => isFn.every((fn) => fn(value));
}
