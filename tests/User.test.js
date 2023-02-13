const User = require('../src/User')

// User tests here
describe('User Object', () => {

// test username
test("User has a username", () => {
    expect(new User("Harryg15", "secretPassword123", 23).username).toEqual("Harryg15")
})

// test password
test("User has a password", () => {
    expect(new User("Harryg15", "secretPassword123", 23).password).toEqual("secretPassword123")
})

// test age
test("User has an age", () => {
    expect(new User("Harryg15", "secretPassword123", 23).age).toEqual(23)
})

// test login

// test logout

})
