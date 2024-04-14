import isAllOf, { getIsAllOf } from "@std-types/is-all-of";
import isNumber from "@std-types/is-number";
import isObject from "@std-types/is-object";
import isString from "@std-types/is-string";

interface Identity {
  name: string;
  age: number;
}

const isIdentity = (value: unknown): value is Identity => {
  return isObject(value) && isString(value.name) && isNumber(value.age);
};

interface Position {
  x: number;
  y: number;
}

const isPosition = (value: unknown): value is Position => {
  return isObject(value) && isNumber(value.x) && isNumber(value.y);
};

const positionAndIdentity: Position & Identity = {
  x: 1,
  y: 1,
  name: "a",
  age: 1,
};

describe("isAllOf", () => {
  it("should return true", () => {
    expect(isAllOf(1, isNumber, isNumber)).toBe(true);
    expect(isAllOf("a", isString, isString)).toBe(true);
    expect(isAllOf({ x: 1, y: 1 }, isObject, isObject)).toBe(true);
  });

  it("should unify types", () => {
    expect(isAllOf(positionAndIdentity, isPosition, isIdentity)).toBe(true);
  });

  it("should return false", () => {
    expect(isAllOf(1, isNumber, isString)).toBe(false);
    expect(isAllOf("1", isNumber, isString)).toBe(false);
    expect(isAllOf({ x: 1, y: 1 }, isObject, isString)).toBe(false);
  });
});

describe("getIsAllOf", () => {
  it("should return true", () => {
    const isNumberAndNumber = getIsAllOf(isNumber, isNumber);
    expect(isNumberAndNumber(1)).toBe(true);
  });

  it("should unify types", () => {
    const isPositionAndIdentity = getIsAllOf(isPosition, isIdentity);
    expect(isPositionAndIdentity(positionAndIdentity)).toBe(true);
  });

  it("should return false", () => {
    const isNumberAndString = getIsAllOf(isNumber, isString);
    expect(isNumberAndString("1")).toBe(false);
    expect(isNumberAndString(1)).toBe(false);
  });
});
