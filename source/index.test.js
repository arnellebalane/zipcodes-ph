import assert from 'assert';
import zipcodes from './index';

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
        const actual = zipcodes.find(0);
        assert.strictEqual(actual, expected);
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

describe('reverse(location)', function() {
    it('should return the zipcode for the given location', function() {
        let expected = 6000;
        let actual = zipcodes.reverse('Cebu City');
        assert.equal(actual, expected);

        expected = 6042;
        actual = zipcodes.reverse('Asturias');
        assert.equal(actual, expected);
    });

    it('should return null when zipcode for location is not found', function() {
        const expected = null;
        const actual = zipcodes.reverse('Random City That Does Not Exist');
        assert.strictEqual(actual, expected);
    });
});
