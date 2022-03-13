const { TestWatcher } = require("jest");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        // on successful creation
        it("should create a Manager object with the designated variable inputs when called with the 'new' keyword", () => {
            // Arrange
            const managerTest = new Manager('fakeName', 'fakeEID', 'fakeEmail', 'fakeOfficeID');
            // Act happens during arrangement of Manager
            // Assert
            expect(managerTest.position).toBe('Manager');
            expect(managerTest.name).toBe('fakeName');
            expect(managerTest.employeeID).toBe('fakeEID');
            expect(managerTest.email).toBe('fakeEmail');
            expect(managerTest.officeID).toBe('fakeOfficeID');
        });
    });
});
