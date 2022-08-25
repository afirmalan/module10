const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    describe("test Engineer's properties", () => {
        it("test all properties", () => {
            const engineer = new Engineer('Adrian', 1, 'afirmalan@yahoo.com', 'afirmalan')
            expect(engineer.name).toEqual('Adrian')
            expect(engineer.id).toEqual(1)
            expect(engineer.email).toEqual('afirmalan@yahoo.com')
            expect(engineer.github).toEqual('afirmalan')

        })

    })
    describe("test Engineer's methods", () => {
        it("test all methods", () => {
            const engineer = new Engineer('Phil', 2, 'ploy@yahoo.com', 'ploy')
            expect(engineer.getName()).toEqual('Phil')
            expect(engineer.getId()).toEqual(2)
            expect(engineer.getEmail()).toEqual('ploy@yahoo.com')
            expect(engineer.getGithub()).toEqual('ploy')
            expect(engineer.getRole()).toEqual('Engineer')

        })
    })
})
