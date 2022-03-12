const fs = require('fs');

// engineer "is a" employee
const Employee = require("./Employee");


// new idea, engineer will need to add itself to the end of the employee array
// still need to work on this ^ //

class Engineer {
    constructor (nameInput,eID,email,gitUsername,continueInput) {
        this.name = nameInput;
        this.employeeID = eID;
        this.email = email;
        this.gitUsername = gitUsername;
        
        super.employees += this;
        super.nextQuestion(continueInput)
    }
}

module.exports = Engineer;