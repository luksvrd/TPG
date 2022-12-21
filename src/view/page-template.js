// Importing promises from the fs module to use the writeFile() method.
// This method writes data to a file, replacing the file if it already exists.
import { promises as fs } from "fs";

// This function creates the HTML file using the cardsHTML parameter.
function createHTML(cardsHTML) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="style.css"/>
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
      <title>Team Profile</title>
      </head>
    <body>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 p-5 mb-3 team-heading">
            <h1 class="text-center">My Team</h1>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="team-area col-12 d-flex justify-content-center">
            ${cardsHTML}
          </div>
        </div>
      </div>
    </body>
  </html>`;
}

// Exporting the writeHTML function to be used in the index.js file.
// The cards parameter is the cardsHTML parameter from the createHTML function, it is passed in from the index.js file.
export default (cards) => {
  fs.writeFile("./dist/index.html", createHTML(cards))
    .then(() => {
      console.log("HTML file created!");
    })
    .catch((err) => {
      console.log(err);
    });
};
