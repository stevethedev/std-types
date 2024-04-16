# `@std-types/is-enum`

Ensure a value is one of an enumerated set

## Installation

```sh
npm install @std-types/is-enum
```

## Usage

```ts
import isEnum from "@std-types/is-enum";

enum E {
  A,
  B,
  C,
}

console.log(isEnum(E.A, E)); // true
console.log(isEnum(E.B, E)); // true
console.log(isEnum(E.C, E)); // true
console.log(isEnum(true, E)); // false
```
