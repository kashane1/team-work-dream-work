const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// this class will "has a" parent relationship with all the others

class Employee {
  constructor () {
    this.manager = promptManager()
    this.continue = function(input) {
      if (input == 'Engineer'){
        promptEngineer();
      } else if (input == 'Intern') {
        promptIntern();
      } else {
        // endFunctionGoesHere()
      }
    }
  }
}


const promptManager = () => {
  return inquirer.prompt([
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
  ], function(answers) {
      const managerInput = new Manager(answers.nameInput, answers.eID, answers.email, answers.officeID, answers.continueInput)
      return managerInput;
  });
};

const promptEngineer = () => {
  return inquirer.prompt([
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
  ], function(answers) {
      const engineerInput = new Engineer(answers.nameInput, answers.eID, answers.email, answers.gitUsername, answers.continueInput)
      return engineerInput;
  });
};

const promptIntern = () => {
  return inquirer.prompt([
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
  ], function(answers) {
      const internInput = new Intern(answers.nameInput, answers.eID, answers.email, answers.school, answers.continueInput)
      return internInput;
  });
};

module.exports = Employee;