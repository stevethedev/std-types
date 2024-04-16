import assertType, { getAssertType } from "@std-types/assert-type";
import isNumber from "@std-types/is-number";

describe("assertType", () => {
  it("should throw an error if the value is not of the expected type", () => {
    expect(() => assertType("foo", isNumber)).toThrowError(
      "Unexpected type: string",
    );
  });

  it("should throw an error with a custom message if the value is not of the expected type", () => {
    expect(() =>
      assertType("foo", isNumber, "Expected value to be a number"),
    ).toThrowError("Expected value to be a number");
  });

  it("should not throw an error if the value is of the expected type", () => {
    expect(() => assertType(42, isNumber)).not.toThrow();
  });
});

describe("getAssertType", () => {
  it("should return a function that throws an error if the value is not of the expected type", () => {
    const assertNumber = getAssertType(isNumber);
    expect(() => assertNumber("foo")).toThrowError("Unexpected type: string");
  });

  it("should return a function that throws an error with a custom message if the value is not of the expected type", () => {
    const assertNumber = getAssertType(isNumber);
    expect(() =>
      assertNumber("foo", "Expected value to be a number"),
    ).toThrowError("Expected value to be a number");
  });

  it("should return a function that does not throw an error if the value is of the expected type", () => {
    const assertNumber = getAssertType(isNumber);
    expect(() => assertNumber(42)).not.toThrow();
  });
});
