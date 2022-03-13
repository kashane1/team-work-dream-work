const { TestWatcher } = require("jest");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        // on successful creation
        it("should create a Engineer object with the designated variable inputs when called with the 'new' keyword", () => {
            // Arrange
            const engineerTest = new Engineer('fakeName', 'fakeEID', 'fakeEmail', 'fakeGitHub');
            // Act happens during arrangement of Engineer
            // Assert
            expect(engineerTest.position).toBe('Engineer');
            expect(engineerTest.name).toBe('fakeName');
            expect(engineerTest.employeeID).toBe('fakeEID');
            expect(engineerTest.email).toBe('fakeEmail');
            expect(engineerTest.gitUsername).toBe('fakeGitHub');
        });
    });
});