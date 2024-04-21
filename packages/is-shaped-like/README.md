# `@std-types/is-shaped-like`

Utility type-checker for detecting the shape of an object

## Installation

```sh
npm install @std-types/is-shaped-like
```

## Usage

```ts
import isBoolean from "@std-types/is-boolean";
import isNumber from "@std-types/is-number";
import isShapedLike, { getIsShapedLike } from "@std-types/is-shaped-like";
import isString from "@std-types/is-string";

const obj = {
  name: "Steve",
  age: 30,
  isDev: true,
};

const shape = {
  name: isString,
  age: isNumber,
  isDev: isBoolean,
};

if (isShapedLike(obj, shape)) {
  console.log("The object is shaped like the shape");
}

const isShapedLikePerson = getIsShapedLike({
  name: isString,
  age: isNumber,
  isDev: isBoolean,
});

if (isShapedLikePerson(obj)) {
  console.log("The object is shaped like a person");
}
```

### Extending a Shape

```ts
import { getIsShapedLike } from "@std-types/is-shaped-like";

const isShapedLikePerson = getIsShapedLike({
  name: isString,
  age: isNumber,
  isDev: isBoolean,
});

const isShapedLikeEmployee = getIsShapedLike({
  ...isShapedLikePerson.shape,
  jobTitle: isString,
});

const obj = {
  name: "Steve",
  age: 30,
  isDev: true,
  jobTitle: "Software Engineer",
};

if (isShapedLikeEmployee(obj)) {
  console.log("The object is shaped like an employee");
}
```

### Extending a shape with the `extend` function

```ts
import { getIsShapedLike } from "@std-types/is-shaped-like";

const isShapedLikePerson = getIsShapedLike({
  name: isString,
  age: isNumber,
  isDev: isBoolean,
});

const isShapedLikeEmployee = isShapedLikePerson.extend({
  jobTitle: isString,
});
```
