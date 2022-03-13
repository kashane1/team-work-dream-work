class Engineer {
    constructor (nameInput,eID,email,gitUsername) {
        this.position = 'Engineer';
        this.name = nameInput;
        this.employeeID = eID;
        this.email = email;
        this.gitUsername = gitUsername;
    }
}

module.exports = Engineer;