import isInstanceOf, { getIsInstanceOf } from "@std-types/is-instance-of";

describe("isInstanceOf", () => {
  it("should return true if value is instance of class", () => {
    expect(isInstanceOf(new Error(), Error)).toBe(true);
  });

  it("should return false if value is not instance of class", () => {
    expect(isInstanceOf(new Error(), TypeError)).toBe(false);
  });

  it("should return true if value inherits from the given class", () => {
    expect(isInstanceOf(new TypeError(), Error)).toBe(true);
  });
});

describe("getIsInstanceOf", () => {
  const isInstanceOfError = getIsInstanceOf(Error);

  it("should return true if value is instance of class", () => {
    expect(isInstanceOfError(new Error())).toBe(true);
  });

  it("should return false if value is not instance of class", () => {
    expect(isInstanceOfError("")).toBe(false);
  });

  it("should return true if value inherits from the given class", () => {
    expect(isInstanceOfError(new TypeError())).toBe(true);
  });
});
