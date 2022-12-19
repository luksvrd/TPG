// Importing the Employee class to use as a parent class for the Manager class.
import Employee from "./Employee.js";

// Extends the Employee class to create a Manager class that includes the following properties and methods:
export default class Manager extends Employee {
  #officeNumber;

  // Using the constructor() method, the Manager class is initialized with the following properties: name, id, email, and officeNumber.
  constructor({ name, id, email, officeNumber }) {
    super({ name, id, email });
    this.#officeNumber = officeNumber;
  }

  // In the rendered HTML file, the Manager's office number is displayed. This is unique to the Manager class.
  createUniqueLIs() {
    return `<li class="list-group-item">Office Number: ${
      this.#officeNumber
    }</li>`;
  }

  // getRole() is overridden to return 'Manager'
  getRole() {
    return "Manager";
  }

  // get officeNumber() is a getter method that returns the Manager's office number
  get officeNumber() {
    return this.#officeNumber;
  }
}
