import { describe, expect, it } from "vitest";
import Manager from "../src/models/Manager";

describe("Manager", () => {
  it("should return the manager's name", () => {
    const manager = new Manager({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
      officeNumber: 123,
    });

    expect(manager.name).toBe("John Doe");
  });

  it("should return the manager's id", () => {
    const manager = new Manager({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
      officeNumber: 123,
    });

    expect(manager.id).toBe(1);
  });

  it("should return the manager's email", () => {
    const manager = new Manager({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
      officeNumber: 123,
    });

    expect(manager.email).toBe("doe@gmail.com");
  });

  it("should return the manager's office number", () => {
    const manager = new Manager({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
      officeNumber: 123,
    });

    expect(manager.officeNumber).toBe(123);
  });

  it("should return the manager's role", () => {
    const manager = new Manager({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
      officeNumber: 123,
    });

    expect(manager.getRole()).toBe("Manager");
  });
});
