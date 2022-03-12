const fs = require('fs');

// manager "is a" employee
const Employee = require("./Employee");

class Manager {
    constructor (nameInput,eID,email,officeID,continueInput) {
        this.position = 'Manager';
        this.name = nameInput;
        this.employeeID = eID;
        this.email = email;
        this.officeID = officeID;

        // console.log(this);
        // super.employees += this;
        // super.nextQuestion(continueInput)
    }


}

// new Manager(answers.nameInput, answers.eID, answers.email, answers.officeID, answers.continueInput)


module.exports = Manager;