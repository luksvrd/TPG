import { describe, expect, it } from "vitest";
import Intern from "../src/models/Intern";

describe("Intern", () => {
  it("should return the intern's name", () => {
    const intern = new Intern({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
      school: "UCLA",
    });

    expect(intern.name).toBe("John Doe");
  });

  it("should return the intern's id", () => {
    const intern = new Intern({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
      school: "UCLA",
    });

    expect(intern.id).toBe(1);
  });

  it("should return the intern's email", () => {
    const intern = new Intern({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
      school: "UCLA",
    });

    expect(intern.email).toBe("doe@gmail.com");
  });

  it("should return the intern's school", () => {
    const intern = new Intern({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
      school: "UCLA",
    });

    expect(intern.school).toBe("UCLA");
  });

  it("should return the intern's role", () => {
    const intern = new Intern({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
      school: "UCLA",
    });

    expect(intern.getRole()).toBe("Intern");
  });
});
