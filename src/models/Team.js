import inquirer from "inquirer";
import Engineer from "./Engineer.js";
import Intern from "./Intern.js";
import Manager from "./Manager.js";
export default class Team {
  #members = [];
  #questions = {
    manager: [
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: (answer) => this.#validateName(answer),
        default: "John Doe",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's id?",
        validate: (answer) => this.#validateNumber(answer),
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
        validate: (answer) => this.#validateEmail(answer),
        default: "manager@mg.com",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
        validate: (answer) => this.#validateNumber(answer),
        default: "1234567890",
      },
    ],
    menu: [
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "Finish building my team"],
      },
    ],
    engineer: [
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        validate: (answer) => this.#validateName(answer),
        default: "Jane Doe",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
        validate: (answer) => {
          const validateIdResults = this.#validateId(answer);
          if (validateIdResults !== true) {
            return validateIdResults;
          }

          return this.#validateNumber(answer);
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
        validate: (answer) => this.#validateEmail(answer),
        default: "a@a.com",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
    ],
    intern: [
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate: (answer) => this.#validateName(answer),
        default: "Jane Doe",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
        validate: (answer) => {
          const validateIdResults = this.#validateId(answer);
          if (validateIdResults !== true) {
            return validateIdResults;
          }

          return this.#validateNumber(answer);
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
        validate: (answer) => this.#validateEmail(answer),
        default: "a@a.com",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        validate: (answer) => this.#validateSchool(answer),
        default: "University",
      },
    ],
  };

  async #addEmployees() {
    const choice = await inquirer.prompt(this.#questions.menu);

    switch (choice.memberChoice) {
      case "Engineer":
        await this.#createEngineer();
        await this.#addEmployees();
        break;
      case "Intern":
        await this.#createIntern();
        await this.#addEmployees();
        break;
      default:
    }
  }

  async #createManager() {
    const managerAnswers = await inquirer.prompt(this.#questions.manager);
    this.#members.push(new Manager(managerAnswers));
  }

  async #createEngineer() {
    const engineerAnswers = await inquirer.prompt(this.#questions.engineer);
    this.#members.push(new Engineer(engineerAnswers));
  }

  async #createIntern() {
    const internAnswers = await inquirer.prompt(this.#questions.intern);
    this.#members.push(new Intern(internAnswers));
  }

  #validateEmail(email) {
    return (
      Boolean(email.match(/\S+@\S+\.\S+/)) ||
      "Please enter a valid email address."
    );
  }

  #validateId(id) {
    return (
      this.#members.every((member) => member.id !== id) ||
      "This ID is already in use. Please enter a unique ID."
    );
  }

  #validateName(name) {
    return name !== "" || "Please enter a name.";
  }

  #validateSchool(school) {
    return school !== "" || "Please enter a school.";
  }

  #validateNumber(number) {
    return (
      Boolean(number.match(/^[1-9]\d*$/)) ||
      "Please enter a positive number greater than zero."
    );
  }

  // this get method returns the value of the private field #members allowing us to access the value of the private field outside of the class.
  get member() {
    // using private fields, we can create a getter method that returns the value of the private field.
    return this.#members;
  }

  createCards() {
    return (
      this.#members
        // map.() is a method that creates a new array with the results of calling a function for every array element.
        .map(
          (member) =>
            `<div class="card employee-card">
            <div class="card-header">
              <h2 class="card-title">${member.name}</h2>
              <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${member.getRole()}</h3>
            </div>

            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${member.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${
                  member.mail
                }">${member.email}</a></li>
                <li class="list-group-item">${member.createUniqueLIs()}</li>
              </ul>
            </div>
          </div>`
        )
        .join("")
    );
  }

  async init() {
    await this.#createManager();
    return this.#addEmployees();
  }
}
