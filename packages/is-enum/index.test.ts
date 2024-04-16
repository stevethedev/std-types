import isEnum, { getIsEnum } from "./index";

describe("isEnum", () => {
  it("should return true if value is enum", () => {
    enum Status {
      PENDING = "PENDING",
      SUCCESS = "SUCCESS",
      FAILED = "FAILED",
    }

    expect(isEnum(Status.PENDING, Status)).toBe(true);
  });

  it("should return false if value is not enum", () => {
    enum Status {
      PENDING = "PENDING",
      SUCCESS = "SUCCESS",
      FAILED = "FAILED",
    }

    expect(isEnum("FOO", Status)).toBe(false);
  });
});

describe("getIsEnum", () => {
  enum Status {
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
  }

  const isStatus = getIsEnum(Status);

  it("should return true if value is enum", () => {
    expect(isStatus(Status.PENDING)).toBe(true);
  });

  it("should return false if value is not enum", () => {
    expect(isStatus("FOO")).toBe(false);
  });
});
