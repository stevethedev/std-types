# `@std-types/is-symbol`

Type-checking library for symbols

## Installation

```sh
npm install @std-types/is-symbol
```

## Usage

```ts
import isSymbol from "@std-types/is-symbol";

isSymbol(Symbol("foo")); //=> true
isSymbol("foo"); //=> false
```
