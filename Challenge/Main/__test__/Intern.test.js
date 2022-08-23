const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager')

describe("Manager", () => {
    describe("test Manager's properties", () => {
        it("test all properties", () => {
            const intern = new Intern('Adrian', 1, 'afirmalan@yahoo.com', 'OSU')
            expect(intern.name).toEqual('Adrian')
            expect(intern.id).toEqual(1)
            expect(intern.email).toEqual('afirmalan@yahoo.com')
            expect(intern.school).toEqual('OSU')

        })

    })
    describe("test Manager's methods", () => {
        it("test all methods", () => {
            const intern = new Intern('Phil', 2, 'ploy@yahoo.com', 'OSU')
            expect(intern.getName()).toEqual('Phil')
            expect(intern.getId()).toEqual(2)
            expect(intern.getEmail()).toEqual('ploy@yahoo.com')
            expect(intern.getSchool()).toEqual('OSU')
            expect(intern.getRole()).toEqual('Intern')

        })
    })
})
