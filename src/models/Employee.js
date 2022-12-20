// This is the parent class for the Manager, Engineer, and Intern classes.
// Exporting the Employee class to be used in other files. The Employee class includes the following properties and methods:
export default class Employee {
  #name;
  #id;
  #email;

  // Using the constructor() method, the Employee class is initialized with the following properties: name, id, and email.
  constructor({ name, id, email }) {
    this.#name = name;
    this.#id = id;
    this.#email = email;
  }

  // getRole() is overridden to return 'Employee'
  getRole() {
    return "Employee";
  }

  // get name() is a getter method that returns the Employee's name. get name() must be lowercase to avoid conflict with the name property.
  get name() {
    return this.#name;
  }

  // get id() is a getter method that returns the Employee's id
  get id() {
    return this.#id;
  }

  // get email() is a getter method that returns the Employee's email
  get email() {
    return this.#email;
  }
}
