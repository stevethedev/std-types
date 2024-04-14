type IsFn<T> = (data: unknown) => data is T;

export default function <A, B>(
  data: unknown,
  isFn0: IsFn<A>,
  isFn1: IsFn<B>,
): data is A | B;
export default function <A, B, C>(
  data: unknown,
  isFn0: IsFn<A>,
  isFn1: IsFn<B>,
  isFn2: IsFn<C>,
): data is A | B | C;
export default function <A, B, C, D>(
  data: unknown,
  isFn0: IsFn<A>,
  isFn1: IsFn<B>,
  isFn2: IsFn<C>,
  isFn3: IsFn<D>,
): data is A | B | C | D;
export default function <A, B, C, D, E>(
  data: unknown,
  isFn0: IsFn<A>,
  isFn1: IsFn<B>,
  isFn2: IsFn<C>,
  isFn3: IsFn<D>,
  isFn4: IsFn<E>,
): data is A | B | C | D | E;
export default function <A, B, C, D, E, F>(
  data: unknown,
  isFn0: IsFn<A>,
  isFn1: IsFn<B>,
  isFn2: IsFn<C>,
  isFn3: IsFn<D>,
  isFn4: IsFn<E>,
  isFn5: IsFn<F>,
): data is A | B | C | D | E | F;

export default function <T>(data: unknown, ...isFn: Array<IsFn<T>>): data is T {
  return isFn.some((fn) => fn(data));
}

export function getIsOneOf<A>(isFn0: IsFn<A>): IsFn<A>;
export function getIsOneOf<A, B>(isFn0: IsFn<A>, isFn1: IsFn<B>): IsFn<A | B>;
export function getIsOneOf<A, B, C>(
  isFn0: IsFn<A>,
  isFn1: IsFn<B>,
  isFn2: IsFn<C>,
): IsFn<A | B | C>;
export function getIsOneOf<A, B, C, D>(
  isFn0: IsFn<A>,
  isFn1: IsFn<B>,
  isFn2: IsFn<C>,
  isFn3: IsFn<D>,
): IsFn<A | B | C | D>;
export function getIsOneOf<A, B, C, D, E>(
  isFn0: IsFn<A>,
  isFn1: IsFn<B>,
  isFn2: IsFn<C>,
  isFn3: IsFn<D>,
  isFn4: IsFn<E>,
): IsFn<A | B | C | D | E>;
export function getIsOneOf<A, B, C, D, E, F>(
  isFn0: IsFn<A>,
  isFn1: IsFn<B>,
  isFn2: IsFn<C>,
  isFn3: IsFn<D>,
  isFn4: IsFn<E>,
  isFn5: IsFn<F>,
): IsFn<A | B | C | D | E | F>;

export function getIsOneOf<T>(...isFn: Array<IsFn<T>>): IsFn<T> {
  return (data: unknown): data is T => isFn.some((fn) => fn(data));
}
