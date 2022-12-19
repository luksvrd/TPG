// Importing the Team class from the models folder to create a new team object.
import Team from "./models/Team.js";
// Importing the writeHTML function from the view folder to write the HTML file.
import writeHTML from "./view/page-template.js";

// Creates a new team object
const team = new Team();

// Initialize the team building process. Asynchronous process because it uses Inquirer.
await team.init();

// Write the HTML file
writeHTML(team.createCards());
