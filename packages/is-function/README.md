# `@std-types/is-function`

Check whether a value is a function

## Installation

```sh
npm install @std-types/is-function
```

## Usage

```ts
import isFunction from "@std-types/is-function";

isFunction(() => {}); // true
isFunction(function () {}); // true
isFunction(async function () {}); // true
isFunction(function* () {}); // true
isFunction(async function* () {}); // true
isFunction(new Function()); // true
```
