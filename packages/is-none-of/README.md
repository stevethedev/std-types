# `@std-types/is-none-of`

Check whether a value matches none of the given guards

## Installation

```sh
npm install @std-types/is-none-of
```

## Usage

```ts
import isNoneOf from "@std-types/is-none-of";

isNoneOf(1, isNumber, isString); // false
isNoneOf("foo", isNumber, isString); // false
isNoneOf([], isNumber, isString); // true
```
