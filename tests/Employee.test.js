const employeeTest = require("../lib/Employee");

describe("getName", () => {
  it("should return the name of the employee", () => {
    expect(fizzBuzz([1])).toBe("1");
    expect(fizzBuzz([1, 2])).toBe("1, 2");
  });
});
