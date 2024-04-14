# `@std-types/is-defined`

Check whether values are defined.

## Installation

```sh
npm install @std-types/is-defined
```

## Usage

```ts
import isDefined from "@std-types/is-defined";

isDefined(undefined); // false
isDefined(null); // true

declare const value: string | undefined;
if (isDefined(value)) {
  console.log(value); // value is string
}
```
