const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getName", () => {
    it("should get employee's name", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";
      const school = "mit";

      const result = new Intern(name, id, email, school).getName();

      expect(result).toEqual(name);
    });
  });
  describe("getId", () => {
    it("should get employee's name", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";
      const school = "mit";

      const result = new Intern(name, id, email, school).getId();

      expect(result).toEqual(id);
    });
  });
  describe("getEmail", () => {
    it("should get employee's email", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";
      const school = "mit";

      const result = new Intern(name, id, email, school).getEmail();

      expect(result).toEqual(email);
    });
  });
  describe("getRole", () => {
    it("should return employee's role", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";
      const school = "mit";
      const result = new Intern(name, id, email, school).getRole();

      expect(result).toEqual("Intern");
    });
    describe("getSchool", () => {
      it("should return employee's school", () => {
        const name = "jim";
        const id = "1";
        const email = "test@gmail.com";
        const school = "mit";
        const result = new Intern(name, id, email, school).getSchool();

        expect(result).toEqual(school);
      });
    });
  });
});
