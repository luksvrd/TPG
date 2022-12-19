// Importing the Employee class to use as a parent class for the Engineer class.
import Employee from "./Employee.js";

// Extends the Employee class to create an Engineer class that includes the following properties and methods:
export default class Engineer extends Employee {
  #github;

  // Using the constructor() method, the Engineer class is initialized with the following properties: name, id, email, and github.
  constructor({ name, id, email, github }) {
    super({ name, id, email });
    this.#github = github;
  }

  // In the rendered HTML file, the Engineer's GitHub username is displayed as a link to their GitHub profile. This is unique to the Engineer class.
  createUniqueLIs() {
    return `<li> class="list-group-item">GitHub: ${this.#github}</li>`;
  }

  // getRole() is overridden to return 'Engineer'
  getRole() {
    return "Engineer";
  }

  // get github() is a getter method that returns the GitHub username
  get github() {
    return this.#github;
  }
}
