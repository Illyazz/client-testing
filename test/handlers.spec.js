const { switchMode } = require('../static/js/handlers');
let helpers = require('../static/js/helpers');

jest.mock('../static/js/helpers');

describe('handlers', () => {

    describe('switchMode', () => {
        test('it invokes darkMode if target is checked', () => {
            const stubEvent = { target: { checked: true }};
            switchMode(stubEvent);
            expect(helpers.darkMode).toHaveBeenCalled();
        })

        test('it invokes lightMode if target is checked', () => {
            const stubEvent = { target: { checked: false }};
            switchMode(stubEvent);
            expect(helpers.lightMode).toHaveBeenCalled();
        })
    });
})