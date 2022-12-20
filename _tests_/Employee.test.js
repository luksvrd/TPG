import { describe, expect, it } from "vitest";
import Employee from "../src/models/Employee";

describe("Employee", () => {
  // Arrange - arrange the inputs and the expected outputs
  it("should create an object with name, id, and email properties", () => {
    const employee = new Employee("John Doe", 1, "doe@gmail.com");

    expect(employee).toEqual("John Doe", 1, "doe@gmail.com");
  });

  // Act - call the function with the inputs
  it("should return the employee's name", () => {
    const employee = new Employee("John Doe", 1, "doe@gmail.com");

    // Assert - compare the actual output to the expected output
    expect(employee.name).toEqual("John Doe");
  });

  it("should return the employee's id", () => {
    const employee = new Employee("John Doe", 1, "doe@gmail.com");

    expect(employee.id).toBe(1);
  });

  it("should return the employee's email", () => {
    const employee = new Employee("John Doe", 1, "doe@gmail.com");

    expect(employee.email).toBe("doe@gmail.com");
  });
  // write a test that will check the getRole() method
  it("should return the employee's role", () => {
    const employee = new Employee("John Doe", 1, "doe@gmail.com");

    expect(employee.getRole()).toBe("Employee");
  });
});
