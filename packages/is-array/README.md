# `@std-types/is-array`

Type-checking library for arrays.

## Installation

```sh
npm install @std-types/is-array
```

## Usage

```ts
import isArray, { getIsArray } from "@std-types/is-array";
import isNumber from "@std-types/is-number";

const n = [1, 2, 3];
if (isArray(n)) {
  // n is unknown[]
}

if (isArray(n, isNumber)) {
  // n is number[]
}

const isArrayOfNumbers = getIsArray(isNumber);
if (isArrayOfNumbers(n)) {
  // n is number[]
}

const isArrayOfArrayOfNumbers = getIsArray(isArrayOfNumbers);
if (isArrayOfArrayOfNumbers(n)) {
  // n is number[][]
}
```
