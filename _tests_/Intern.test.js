const Intern = require("./../lib/Intern");

describe("Intern class", () => {
    it("Has a school attribute", () => {
        const e = new Intern(4, 'Mandy', 'mandy@dunder.com', 'blues clues');
        expect(e.school).toBe('blues clues');
    });

    it("Can get role via getRole()", () => {
        const e = new Intern(4, 'Mandy', 'mandy@dunder.com', 'blues clues');
        expect(e.getRole()).toBe('Intern');
    });

    it("Can get github via getSchool()", () => {
        const e = new Intern(4, 'Mandy', 'mandy@dunder.com', 'blues clues');
        expect(e.getSchool()).toBe('blues clues');
    });
});