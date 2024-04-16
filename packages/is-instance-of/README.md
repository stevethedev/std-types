# `@std-types/is-instance-of`

Check whether a given value is an instance of some class

## Installation

```sh
npm install @std-types/is-instance-of
```

## Usage

```ts
import isInstanceOf from "@std-types/is-instance-of";

class A {}
class B extends A {}

const a = new A();
const b = new B();

console.log(isInstanceOf(a, A)); // true
console.log(isInstanceOf(b, A)); // true
console.log(isInstanceOf(a, B)); // false
console.log(isInstanceOf(b, B)); // true
```
