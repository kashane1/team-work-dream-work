class Manager {
    constructor (nameInput,eID,email,officeID) {
        this.position = 'Manager';
        this.name = nameInput;
        this.employeeID = eID;
        this.email = email;
        this.officeID = officeID;
    }
}

module.exports = Manager;