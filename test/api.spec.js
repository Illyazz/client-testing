const apiHelpers = require('../static/js/api')

const helpers = require('../static/js/helpers')

console.log("tests",apiHelpers, helpers)

global.fetch = require('jest-fetch-mock')


describe('apiHelpers', () => {
    test('it makes a fetch call to the user\'s github username', () => {
        apiHelpers.fetchData('getfutureproof')
        expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/getfutureproof')
    })
})
