const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// this class will "has a" parent relationship with all the others
let employees = [];

class Employee {
  constructor () {
    this.manager = promptManager();
  }
}

// defining the 3 functions to prompt the user about each type of employee
function promptManager(){
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'nameInput',
        message: "What is the team manager's name?",
      },
      {
        type: 'input',
        name: 'eID',
        message: "What is the team manager's employee id#?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email address?",
      },
      {
        type: 'input',
        name: 'officeID',
        message: "What is the team manager's office number?",
      },
      {
        type: 'list',
        name: 'continueInput',
        message: "Which type of team member would you like to add next?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members."]
      },
    ])
    .then(answers => {
      // take the answers from the .prompt and create a new Manager and add it to employees array
      const managerInput = new Manager(answers.nameInput, answers.eID, answers.email, answers.officeID)
      employees.push(managerInput);

      // the switch is a good way to decide what the inquirer will do next, based on user input
      switch(answers.continueInput) {
        case 'Engineer':
          promptEngineer();
          break;
        case 'Intern':
          promptIntern();
          break;
        case "I don't want to add any more team members.":
          buildCards(employees);
          break;
        default:
          break;
      }
    })
    .catch((error) => {console.log(error)})
};

// defining the 3 functions to prompt the user about each type of employee
function promptEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'nameInput',
        message: "What is the engineer's name?",
      },
      {
        type: 'input',
        name: 'eID',
        message: "What is the engineer's employee id#?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?",
      },
      {
        type: 'input',
        name: 'gitUsername',
        message: "What is the engineer's GitHub user name?",
      },
      {
        type: 'list',
        name: 'continueInput',
        message: "Which type of team member would you like to add next?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members."]
      },
    ])
    .then(answers => {
      const engineerInput = new Engineer(answers.nameInput, answers.eID, answers.email, answers.gitUsername)
      employees.push(engineerInput);

      switch(answers.continueInput) {
        case 'Engineer':
          promptEngineer();
          break;
        case 'Intern':
          promptIntern();
          break;
        case "I don't want to add any more team members.":
          buildCards(employees);
          break;
        default:
          break;
      }
    })
    .catch((error) => {console.log(error)})
};

// defining the 3 functions to prompt the user about each type of employee
function promptIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'nameInput',
        message: "What is the intern's name?",
      },
      {
        type: 'input',
        name: 'eID',
        message: "What is the intern's employee id#?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?",
      },
      {
        type: 'input',
        name: 'school',
        message: "What is the intern's last school attended?",
      },
      {
        type: 'list',
        name: 'continueInput',
        message: "Which type of team member would you like to add next?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members."]
      },
    ])
    .then(answers => {
      const internInput = new Intern(answers.nameInput, answers.eID, answers.email, answers.school)
      employees.push(internInput);

      switch(answers.continueInput) {
        case 'Engineer':
          promptEngineer();
          break;
        case 'Intern':
          promptIntern();
          break;
        case "I don't want to add any more team members.":
          buildCards(employees);
          break;
        default:
          break;
      }
    })
    .catch((error) => {console.log(error)})
};

// here we use all the objects created to build our html page
function buildCards() {
  let allCards = "";

  // struggled with this next section for a long time. finally added the .position to each object and was able to make it work
  employees.forEach((person) => {
    if (person.position == 'Manager'){
      allCards += `<div class="card" style="width: 18rem;">
      <div class="card-header">
        ${person.name}, Manager
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${person.employeeID}</li>
        <li class="list-group-item">Email: <a href="mailto:${person.email}">${person.email}</a></li>
        <li class="list-group-item">Office Number: ${person.officeID}</li>
      </ul>
    </div>
    `;
    } else if (person.position == 'Engineer') {
      allCards += `<div class="card" style="width: 18rem;">
      <div class="card-header">
        ${person.name}, Engineer
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${person.employeeID}</li>
        <li class="list-group-item">Email: <a href="mailto:${person.email}" class="card-link">${person.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${person.gitUsername}" class="card-link">${person.gitUsername}</a></li>
      </ul>
    </div>
    `;
    } else {
      allCards += `<div class="card" style="width: 18rem;">
      <div class="card-header">
        ${person.name}, Intern
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${person.employeeID}</li>
        <li class="list-group-item">Email: <a href="mailto:${person.email}">${person.email}</a></li>
        <li class="list-group-item">School: ${person.school}</li>
      </ul>
    </div>
    `;
    }
  });
  
  fs.writeFileSync('./dist/index.html', generateHTML(allCards), (err) =>
    err ? console.error(err) : console.log('Success! HTML page generated.')
  );
}

function generateHTML(param) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>My Team</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
    <h1 class="display-4 centered">My Team</h1>
  </div>
  <div class="container">
    <div class="row">
      <div class="team-area col-12 d-flex justify-content-center">
        ${param}
      </div>
    </div>
  </div>
</body>
</html>`
}

module.exports = Employee;