const { TestWatcher } = require("jest");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        // on successful creation
        it("should create a Intern object with the designated variable inputs when called with the 'new' keyword", () => {
            // Arrange
            const internTest = new Intern('fakeName', 'fakeEID', 'fakeEmail', 'fakeSchool');
            // Act happens during arrangement of Intern
            // Assert
            expect(internTest.position).toBe('Intern');
            expect(internTest.name).toBe('fakeName');
            expect(internTest.employeeID).toBe('fakeEID');
            expect(internTest.email).toBe('fakeEmail');
            expect(internTest.school).toBe('fakeSchool');
        });
    });
});