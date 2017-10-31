const assert = require('assert');
const zipcodes = require('./index');

describe('find(zipcode)', function() {
    it('should return the name of the location when there is one result', function() {
        const expected = 'Cebu City';
        const actual = zipcodes.find(6000);
        assert.equal(actual, expected);
    });

    it('should return an array of locations when there are many results', function() {
        const expected = ['Asturias', 'Bantayan'];
        const actual = zipcodes.find(6042);
        assert.deepEqual(actual, expected);
    });

    it('should return null when there are no results', function() {
        const expected = null;
        const actual = zipcodes.find(0000);
        assert.equal(actual, expected);
    });

    it('should accept zipcode as an integer', function() {
        const expected = 'Cebu City';
        const actual = zipcodes.find(6000);
        assert.equal(actual, expected);
    });

    it('should accept zipcode as a string', function() {
        const expected = 'Cebu City';
        const actual = zipcodes.find('6000');
        assert.equal(actual, expected);
    });
});
