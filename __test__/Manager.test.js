const Manager = require('../lib/Manager')

describe("Manager",()=>{
    describe("test Manager's properties",()=>{
        it ("test all properties",()=>{
            const manager = new Manager ('Adrian',1,'afirmalan@yahoo.com',22)
            expect(manager.name).toEqual('Adrian')
            expect(manager.id).toEqual(1)
            expect(manager.email).toEqual('afirmalan@yahoo.com')
            expect(manager.officeNumber).toEqual(22)

        })

    })
    describe("test Manager's methods",()=>{
        it("test all methods",()=>{
            const manager = new Manager ('Phil', 2,'ploy@yahoo.com',21)
            expect(manager.getName()).toEqual('Phil')
            expect(manager.getId()).toEqual(2)
            expect(manager.getEmail()).toEqual('ploy@yahoo.com')
            expect (manager.getRole()).toEqual('Manager')

        })
        })
    })
