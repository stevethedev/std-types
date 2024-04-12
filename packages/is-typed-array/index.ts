export type TypedArray =
  | ArrayBufferView
  | Uint8Array
  | Uint8ClampedArray
  | Uint16Array
  | Uint32Array
  | Int8Array
  | Int16Array
  | Int32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array
  | DataView;

export default (data: unknown): data is TypedArray => ArrayBuffer.isView(data);
