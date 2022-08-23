const inquirer = require("inquirer");
const fs = require("fs");
const { inherits } = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = [];

// Questions for the inquirer on a start
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "what is the manager's name",
  },
  {
    type: "number",
    name: "id",
    message: "what is the manager's employee id",
  },
  {
    type: "input",
    name: "email",
    message: "what is the manager's email address?",
  },
  {
    type: "input",
    name: "office",
    message: "what is the manager's office number?",
  },
];
// Questions if you selected engineer
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "what is the engineer's name",
  },
  {
    type: "number",
    name: "id",
    message: "what is the engineer's employee id",
  },
  {
    type: "input",
    name: "email",
    message: "what is the engineer's email address?",
  },
  {
    type: "input",
    name: "github",
    message: "what is the engineer's github?",
  },
];
// Questions if you selected intern
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "what is the intern's name",
  },
  {
    type: "number",
    name: "id",
    message: "what is the intern's employee id",
  },
  {
    type: "input",
    name: "email",
    message: "what is the intern's email address?",
  },
  {
    type: "input",
    name: "school",
    message: "whhere did the intern go to school?",
  },
];
// Asks which role you want or if you wan to finish selecting
const roleQuestion = [
  {
    type: "list",
    name: "role",
    message:
      "What employee type do you want to add? Or select finish to build team.",
    choices: ["Engineer", "Intern", "Finish"],
  },
];
// Makes a card for the employee from the inquirer inputs
function makeCard(employeeInfo) {
  const role = employeeInfo.getRole();
  if (role === "Manager") {
    return ` <div class="card mb-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employeeInfo.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
      <p class="card-text">ID:${employeeInfo.id}</p>
      <p class="card-text">Email:<a href=mailto:${employeeInfo.email}>${employeeInfo.email}</a></p>
      <p class="card-text">Office Number:${employeeInfo.office}</p>
    </div>
  </div>`;
  }
  if (role === "Engineer") {
    return ` <div class="card mb-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employeeInfo.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
      <p class="card-text">ID:${employeeInfo.id}</p>
      <p class="card-text">Email:<a href=mailto:${employeeInfo.email} target="_blank">${employeeInfo.email}</a></p>
      <p class="card-text">Github:<a href=https://github.com/${employeeInfo.github}>${employeeInfo.github}</p>
    </div>
  </div>`;
  }
  if (role === "Intern") {
    return ` <div class="card mb-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employeeInfo.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
      <p class="card-text">ID: ${employeeInfo.id}</p>
      <p class="card-text">Email: <a href=mailto:${employeeInfo.email}>${employeeInfo.email}</a></p>
      <p class="card-text">School :${employeeInfo.school}</p>
    </div>
  </div>`;
  }
}

// Generates all the html and insterts the cards from the makecard function
function generateHtml() {
  let html = "";
  for (let i = 0; i < employees.length; i++) {
    html += makeCard(employees[i]);
  }
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4" style="text-align: center">My Team</h1>
  </div>
</div>
${html}

    
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    </body>
    </html>
  
      
  
  
  `;
}
// Makes an index.html file
function writeFile(html) {
  console.log(employees);
  const path = "./dist/index.html";

  fs.writeFile(path, html, function (err) {
    if (err) throw err;
    console.log("Index.html generated");
  });
}
// Decides which selection of questions to use if you choose intern or engineer and ends inquirer and writes a file when finish is picked.
function createEmployee() {
  inquirer.prompt(roleQuestion).then((response) => {
    if (response.role === "Intern") {
      inquirer.prompt(internQuestions).then((resp) => {
        const intern = new Intern(resp.name, resp.id, resp.email, resp.school);
        employees.push(intern);
        createEmployee();
      });
    }
    if (response.role === "Engineer") {
      inquirer.prompt(engineerQuestions).then((resp) => {
        const engineer = new Engineer(
          resp.name,
          resp.id,
          resp.email,
          resp.github
        );
        employees.push(engineer);
        createEmployee();
      });
    }
    if (response.role === "Finish") {
      const html = generateHtml();
      writeFile(html);
    }
  });
}
// Starts the inquirer and the questions for the manager.
function init() {
  inquirer.prompt(managerQuestions).then((response) => {
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.office
    );
    employees.push(manager);
    createEmployee();
  });
}

// Function call to initialize app
init();
