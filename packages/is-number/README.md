# `@std-types/is-number`

Type-checking library for numbers.

## Installation

```sh
npm install @std-types/is-number
```

## Usage

```ts
import { isNumber } from "@std-types/is-number";

console.log(isNumber(42)); // true
console.log(isNumber("42")); // false
console.log(isNumber(Infinity)); // false
console.log(isNumber(NaN)); // false

console.log(isNumber(42, { Infinity: true })); // true
console.log(isNumber("42", { Infinity: true })); // true
console.log(isNumber(Infinity, { Infinity: true })); // true
console.log(isNumber(NaN, { Infinity: true })); // true

console.log(isNumber(42, { NaN: true })); // true
console.log(isNumber("42", { NaN: true })); // true
console.log(isNumber(Infinity, { NaN: true })); // true
console.log(isNumber(NaN, { NaN: true })); // true
```
