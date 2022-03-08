// intern "is a" employee
const Employee = require("./Employee");

class Intern extends Employee {
    constructor (nameInput,eID,email,school,continueInput) {
        this.name = nameInput;
        this.employeeID = eID;
        this.email = email;
        this.school = school;
    
        super.continue(continueInput)
    }
}

module.exports = Intern;