# `@std-types/is-one-of`

Type-checking for type-unions

## Installation

```sh
npm install @std-types/is-one-of
```

## Usage

```ts
import isOneOf, { getIsOneOf } from "@std-types/is-one-of";
import isString from "@std-types/is-string";
import { getIsArray } from "@std-types/is-array";

declare const value: unknown;
if (isOneOf(value, isString, getIsArray(isString))) {
  // value is either a string or an array of strings
}

const isStringOrStringArray = getIsOneOf(isString, getIsArray(isString));
if (isStringOrStringArray(value)) {
  // value is either a string or an array of strings
}
```
