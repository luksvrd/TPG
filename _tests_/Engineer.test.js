import { describe, expect, it } from "vitest";
import Engineer from "../src/models/Engineer";

describe("Engineer", () => {
  it("should return the engineer's name", () => {
    const engineer = new Engineer({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
      github: "johndoe",
    });

    expect(engineer.name).toBe("John Doe");
  });

  it("should return the engineer's id", () => {
    const engineer = new Engineer({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
      github: "johndoe",
    });

    expect(engineer.id).toBe(1);
  });

  it("should return the engineer's email", () => {
    const engineer = new Engineer({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
      github: "johndoe",
    });

    expect(engineer.email).toBe("doe@gmail.com");
  });

  it("should return the engineer's github", () => {
    const engineer = new Engineer({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
      github: "johndoe",
    });

    expect(engineer.github).toBe("johndoe");

    it("should return the engineer's role", () => {
      const engineer = new Engineer({
        name: "John Doe",
        id: 1,
        email: "doe@gmail.com",
        github: "johndoe",
      });

      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
