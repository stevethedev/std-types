# `@std-types/is-all-of`

Checks whether an element matches all of the given criteria

## Installation

```sh
npm install @std-types/is-all-of
```

## Usage

```ts
import isAllOf, { getIsAllOf } from "@std-types/is-all-of";

isAllOf(1, isNumber, isString); // false

interface Identity {
  name: string;
  age: number;
}

const isIdentity = (value: unknown): value is Identity => {
  return isObject(value) && isString(value.name) && isNumber(value.age);
};

interface Position {
  x: number;
  y: number;
}

const isPosition = (value: unknown): value is Position => {
  return isObject(value) && isNumber(value.x) && isNumber(value.y);
};

declare const value: unknown;
if (isAllOf(value, isIdentity, isPosition)) {
  // value is Identity & Position
  value;
}

const isIdentityAndPosition = getIsAllOf(isIdentity, isPosition);
if (isIdentityAndPosition(value)) {
  // value is Identity & Position
  value;
}
```
