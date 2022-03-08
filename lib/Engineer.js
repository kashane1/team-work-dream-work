// engineer "is a" employee
const Employee = require("./Employee");


// new idea, engineer will need to add itself to the end of the employee array
// still need to work on this ^ //

class Engineer extends Employee {
    constructor (nameInput,eID,email,gitUsername,continueInput) {
        this.name = nameInput;
        this.employeeID = eID;
        this.email = email;
        this.gitUsername = gitUsername;
        
        super.continue(continueInput)
    }
}

module.exports = Engineer;