// Importing the Employee class to use as a parent class for the Intern class.
import Employee from "./Employee.js";

// Extends the Employee class to create an Intern class that includes the following properties and methods:
export default class Intern extends Employee {
  #school;

  // Using the constructor() method, the Intern class is initialized with the following properties: name, id, email, and school.
  constructor({ name, id, email, school }) {
    super({ name, id, email });
    this.#school = school;
  }

  // In the rendered HTML file, the Intern's school is displayed. This is unique to the Intern class.
  createUniqueLIs() {
    return `<li class="list-group-item">School: ${this.#school}</li>`;
  }

  // getRole() is overridden to return 'Intern'
  getRole() {
    return "Intern";
  }

  // get school() is a getter method that returns the Intern's school
  get school() {
    return this.#school;
  }
}
