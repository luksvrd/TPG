import { describe, expect, it } from "vitest";
import Employee from "../src/models/Employee";

describe("Employee", () => {
  // Act - call the function with the inputs
  it("should return the employee's name", () => {
    const employee = new Employee({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
    });

    // Assert - compare the actual output to the expected output
    expect(employee.name).toEqual("John Doe");
  });

  it("should return the employee's id", () => {
    const employee = new Employee({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
    });

    expect(employee.id).toBe(1);
  });

  it("should return the employee's email", () => {
    const employee = new Employee({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
    });

    expect(employee.email).toBe("doe@gmail.com");
  });
  // write a test that will check the getRole() method
  it("should return the employee's role", () => {
    const employee = new Employee({
      name: "John Doe",
      id: 1,
      email: "doe@gmail.com",
    });

    expect(employee.getRole()).toBe("Employee");
  });
});
