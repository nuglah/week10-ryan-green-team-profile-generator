const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should get employee's name", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";

      const result = new Employee(name, id, email).getName();

      expect(result).toEqual(name);
    });
  });
  describe("getId", () => {
    it("should get employee's name", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";

      const result = new Employee(name, id, email).getId();

      expect(result).toEqual(id);
    });
  });
  describe("getEmail", () => {
    it("should get employee's email", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";

      const result = new Employee(name, id, email).getEmail();

      expect(result).toEqual(email);
    });
  });
  describe("getRole", () => {
    it("should return employee's role", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";
      const result = new Employee(name, id, email).getRole();

      expect(result).toEqual("Employee");
    });
  });
});
