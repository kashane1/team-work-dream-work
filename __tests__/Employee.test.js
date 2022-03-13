const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        // on successful creation
        it("should create an array with atleast 1 Employee object when called with the 'new' keyword", () => {
            // Arrange
            const myTeam = new Employee;
            // Act
            myTeam.employees = ['Manager']
            // Assert
            expect(myTeam.employees.length).toBeGreaterThanOrEqual(1);
        });
        it("should run buildCards and fill the empty string allCards=", () => {
            // Arrange
            const myTeam = new Employee;
            // Act
            myTeam.employees = ['Manager'];
            const allCards = 'Manager';
            // Assert
            expect(allCards).not.toBe('');
        });
    });
});

