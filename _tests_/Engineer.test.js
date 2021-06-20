const Engineer = require("./../lib/Engineer");

describe("Engineer class", () => {
    it("Has a github attribute", () => {
        const e = new Engineer(3, 'Dwight', 'dwight@dunder.com', 'dwight@github.com');
        expect(e.github).toBe('dwight@github.com');
    });

    it("Can get role via getRole()", () => {
        const e = new Engineer(3, 'Dwight', 'dwight@dunder.com', 'dwight@github.com');
        expect(e.getRole()).toBe('Engineer');
    });

    it("Can get github via getGithub()", () => {
        const e = new Engineer(3, 'Dwight', 'dwight@dunder.com', 'dwight@github.com');
        expect(e.getGithub()).toBe('dwight@github.com');
    });
});