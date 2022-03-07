const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// this class will "has a" parent relationship with all the others
constructor (){

}

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'nameInput',
      message: "What is the team manager's name?",
    },
    {
      type: 'input',
      name: 'eID',
      message: "What is the team manager's id#?",
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
  ], function(answers) {
      
  });
};

// employee.js can be thought of like an employee array
// first employee will always be manager, so run that one first then return here

const manager = new Manager();