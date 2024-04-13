# `@std-types/is-boolean`

Type-checking library for booleans.

## Installation

```sh
npm install @std-types/is-boolean
```

## Usage

```ts
import isBoolean from "@std-types/is-boolean";

declare const someValue: unknown;

if (isBoolean(someValue)) {
  // someValue is a boolean
}
```
