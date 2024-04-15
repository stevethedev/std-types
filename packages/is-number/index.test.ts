import isNumber, { getIsNumber } from "./index";

describe("isNumber", () => {
  it("should return true for numbers", () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(1)).toBe(true);
    expect(isNumber(1.1)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(-1.1)).toBe(true);
  });

  it("should return true for numbers with options.Infinity", () => {
    expect(isNumber(0, { Infinity: true })).toBe(true);
    expect(isNumber(1, { Infinity: true })).toBe(true);
    expect(isNumber(1.1, { Infinity: true })).toBe(true);
    expect(isNumber(-1, { Infinity: true })).toBe(true);
    expect(isNumber(-1.1, { Infinity: true })).toBe(true);
  });

  it("should return true for numbers with options.NaN", () => {
    expect(isNumber(0, { NaN: true })).toBe(true);
    expect(isNumber(1, { NaN: true })).toBe(true);
    expect(isNumber(1.1, { NaN: true })).toBe(true);
    expect(isNumber(-1, { NaN: true })).toBe(true);
    expect(isNumber(-1.1, { NaN: true })).toBe(true);
  });

  it("should return false for non-numbers", () => {
    expect(isNumber("0")).toBe(false);
    expect(isNumber("1")).toBe(false);
    expect(isNumber("1.1")).toBe(false);
    expect(isNumber("-1")).toBe(false);
    expect(isNumber("-1.1")).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
  });

  it("should return false for non-numbers with options.NaN", () => {
    expect(isNumber("0", { NaN: true })).toBe(false);
    expect(isNumber("1", { NaN: true })).toBe(false);
    expect(isNumber("1.1", { NaN: true })).toBe(false);
    expect(isNumber("-1", { NaN: true })).toBe(false);
    expect(isNumber("-1.1", { NaN: true })).toBe(false);
    expect(isNumber(null, { NaN: true })).toBe(false);
    expect(isNumber(undefined, { NaN: true })).toBe(false);
    expect(isNumber({}, { NaN: true })).toBe(false);
    expect(isNumber([], { NaN: true })).toBe(false);
    expect(isNumber(true, { NaN: true })).toBe(false);
    expect(isNumber(false, { NaN: true })).toBe(false);
  });

  it("should return false for non-numbers with options.Infinity", () => {
    expect(isNumber("0", { Infinity: true })).toBe(false);
    expect(isNumber("1", { Infinity: true })).toBe(false);
    expect(isNumber("1.1", { Infinity: true })).toBe(false);
    expect(isNumber("-1", { Infinity: true })).toBe(false);
    expect(isNumber("-1.1", { Infinity: true })).toBe(false);
    expect(isNumber(null, { Infinity: true })).toBe(false);
    expect(isNumber(undefined, { Infinity: true })).toBe(false);
    expect(isNumber({}, { Infinity: true })).toBe(false);
    expect(isNumber([], { Infinity: true })).toBe(false);
    expect(isNumber(true, { Infinity: true })).toBe(false);
    expect(isNumber(false, { Infinity: true })).toBe(false);
  });

  it("should allow configurable NaN checks", () => {
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber(NaN, { NaN: false })).toBe(false);
    expect(isNumber(NaN, { NaN: true })).toBe(true);
  });

  it("should allow configurable Infinity checks", () => {
    expect(isNumber(Infinity)).toBe(false);
    expect(isNumber(-Infinity)).toBe(false);
    expect(isNumber(Infinity, { Infinity: false })).toBe(false);
    expect(isNumber(-Infinity, { Infinity: false })).toBe(false);
    expect(isNumber(Infinity, { Infinity: true })).toBe(true);
    expect(isNumber(-Infinity, { Infinity: true })).toBe(true);
  });
});

describe("getIsNumber", () => {
  it("should return a function that returns true for numbers", () => {
    const check = getIsNumber();
    const value = 1;

    expect(check(value)).toBe(true);
  });

  it("should return a function that returns true for numbers with options.Infinity", () => {
    const check = getIsNumber({ Infinity: true });
    const value = 1;

    expect(check(value)).toBe(true);
  });

  it("should return a function that returns true for numbers with options.NaN", () => {
    const check = getIsNumber({ NaN: true });
    const value = 1;

    expect(check(value)).toBe(true);
  });

  it("should return a function that returns false for non-numbers", () => {
    const check = getIsNumber();
    const value = "1";

    expect(check(value)).toBe(false);
  });

  it("should return a function that returns false for non-numbers with options.NaN", () => {
    const check = getIsNumber({ NaN: true });
    const value = "1";

    expect(check(value)).toBe(false);
  });

  it("should return a function that returns false for non-numbers with options.Infinity", () => {
    const check = getIsNumber({ Infinity: true });
    const value = "1";

    expect(check(value)).toBe(false);
  });

  it("should allow configurable NaN checks", () => {
    const check = getIsNumber({ NaN: false });
    const value = NaN;

    expect(check(value)).toBe(false);
    expect(check(value, { NaN: false })).toBe(false);
    expect(check(value, { NaN: true })).toBe(true);
  });

  it("should allow configurable Infinity checks", () => {
    const check = getIsNumber({ Infinity: false });
    const value = Infinity;

    expect(check(value)).toBe(false);
    expect(check(value, { Infinity: false })).toBe(false);
    expect(check(value, { Infinity: true })).toBe(true);
  });
});
