# `@std-types/is-valid-number`

TypeScript Guard for a non-NaN number value.

## Installation

```sh
npm install @std-types/is-valid-number
```

## Usage

```ts
import isValidNumber from "@std-types/is-valid-number";

declare const value: unknown;

if (isValidNumber(value)) {
  // value is a non-NaN number
}
```
