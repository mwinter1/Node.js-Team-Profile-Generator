const Manager = require("./../lib/Manager");


describe("Manager class", () => {
    it("Has a officeNumber attribute", () => {
        const e = new Manager(2, 'Michael Scott', 'mscott@dunder.com', '3125551212');
        expect(e.officeNumber).toBe('3125551212');
    });

    it("Can get role via getRole()", () => {
        const e = new Manager(2, 'Michael Scott', 'mscott@dunder.com', '3125551212');
        expect(e.getRole()).toBe('Manager');
    });

    it("Can get office number via getOfficeNumber()", () => {
        const e = new Manager(2, 'Michael Scott', 'mscott@dunder.com', '3125551212');
        expect(e.getOfficeNumber()).toBe('3125551212');
    });
});