# `@std-types/assert-type`

Assert that a value is the given type

## Installation

```sh
npm install @std-types/assert-type
```

## Usage

```ts
import assertType, { getAssertType } from "@std-types/assert-type";

const assertString = getAssertType("string");

assertString("hello"); // OK
assertString(42); // Error

assertType("hello", isString); // OK
assertType(42, isString); // Error
```
