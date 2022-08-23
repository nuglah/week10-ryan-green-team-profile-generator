const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getName", () => {
    it("should get Manager's name", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";
      const officeNumber = "5";

      const result = new Manager(name, id, email, officeNumber).getName();

      expect(result).toEqual(name);
    });
  });
  describe("getId", () => {
    it("should get Manager's name", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";
      const officeNumber = "5";

      const result = new Manager(name, id, email, officeNumber).getId();

      expect(result).toEqual(id);
    });
  });
  describe("getEmail", () => {
    it("should get Manager's email", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";
      const officeNumber = "5";

      const result = new Manager(name, id, email, officeNumber).getEmail();

      expect(result).toEqual(email);
    });
  });
  describe("getRole", () => {
    it("should return Manager's role", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";
      const officeNumber = "5";
      const result = new Manager(name, id, email, officeNumber).getRole();

      expect(result).toEqual("Manager");
    });
    describe("getOfficeNumber", () => {
      it("should return Manager's office number", () => {
        const name = "jim";
        const id = "1";
        const email = "test@gmail.com";
        const officeNumber = "5";
        const result = new Manager(
          name,
          id,
          email,
          officeNumber
        ).getOfficeNumber();

        expect(result).toEqual(officeNumber);
      });
    });
  });
});
