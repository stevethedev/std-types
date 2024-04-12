# `@std-types/is-typed-array`

Type-checking library for typed arrays

## Installation

```sh
npm install @std-types/is-typed-array
```

## Usage

```ts
import isTypedArray from "@std-types/is-typed-array";

console.log(isTypedArray(new Int8Array())); // true
console.log(isTypedArray(new Uint8Array())); // true
```
