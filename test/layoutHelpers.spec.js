const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

const layoutHelpers = require("../static/js/layoutHelpers");

describe('helpers', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('updateHeader', () => {
        test('it updates the h3 text content', () => {
            let header = document.querySelector('h3')
            layoutHelpers.updateHeader("Bob")
            expect(header.textContent).toEqual("Bob");
        })
    })
})