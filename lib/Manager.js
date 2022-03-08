// manager "is a" employee
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (nameInput,eID,email,officeID,continueInput) {
        this.name = nameInput;
        this.employeeID = eID;
        this.email = email;
        this.officeID = officeID;
    
        super.continue(continueInput)
    }
}

// new Manager(answers.nameInput, answers.eID, answers.email, answers.officeID, answers.continueInput)


module.exports = Manager;