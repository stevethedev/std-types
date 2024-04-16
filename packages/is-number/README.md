# `@std-types/is-number`

Type-checking library for numbers.

## Installation

```sh
npm install @std-types/is-number
```

## Usage

```ts
import isNumber from "@std-types/is-number";

console.log(isNumber(42)); // true
console.log(isNumber("42")); // false
console.log(isNumber(Infinity)); // true
console.log(isNumber(NaN)); // true
```
