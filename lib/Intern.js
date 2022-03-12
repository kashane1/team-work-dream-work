const fs = require('fs');

// intern "is a" employee
const Employee = require("./Employee");

class Intern {
    constructor (nameInput,eID,email,school,continueInput) {
        this.position = 'Intern';
        this.name = nameInput;
        this.employeeID = eID;
        this.email = email;
        this.school = school;
    
        // super.employees += this;
        // super.nextQuestion(continueInput)
    }
}

module.exports = Intern;