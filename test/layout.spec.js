const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('form', () => {
        let form;
        let textInput;

        beforeEach(() => {
            form = document.querySelector('form')
            textInput = form.querySelector('[type="text"]');
            submitBtn = form.querySelector('[type="submit"]');
        })

        test('it exists', () => {
            expect(form).toBeTruthy();
        });

        describe('text input', () => {
            test('it has an id of "name"', () => {
                expect(textInput.id).toBe('name');
            })
    
            test('it has a placeholder of "Enter username"', () => {
                expect(textInput.getAttribute('placeholder')).toBe('Enter username')
            })
        })

        describe('submit button', () => {
            test('it says "Send!', () => {
                expect(submitBtn.value).toBe('Send!');
            })
        })
    })

})