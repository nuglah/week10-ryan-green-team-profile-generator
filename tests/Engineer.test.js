const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getName", () => {
    it("should get employee's name", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";
      const github = "yoyo";

      const result = new Engineer(name, id, email, github).getName();

      expect(result).toEqual(name);
    });
  });
  describe("getId", () => {
    it("should get employee's name", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";
      const github = "yoyo";

      const result = new Engineer(name, id, email, github).getId();

      expect(result).toEqual(id);
    });
  });
  describe("getEmail", () => {
    it("should get employee's email", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";
      const github = "yoyo";

      const result = new Engineer(name, id, email, github).getEmail();

      expect(result).toEqual(email);
    });
  });
  describe("getRole", () => {
    it("should return employee's role", () => {
      const name = "jim";
      const id = "1";
      const email = "test@gmail.com";
      const github = "yoyo";
      const result = new Engineer(name, id, email, github).getRole();

      expect(result).toEqual("Engineer");
    });
    describe("getGithub", () => {
      it("should return employee's github", () => {
        const name = "jim";
        const id = "1";
        const email = "test@gmail.com";
        const github = "yoyo";
        const result = new Engineer(name, id, email, github).getGithub();

        expect(result).toEqual(github);
      });
    });
  });
});
