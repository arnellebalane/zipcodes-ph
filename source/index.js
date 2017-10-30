const zipcodes = require('./zipcodes.json');

module.exports = {
    find(zipcode) {
        return zipcodes[zipcode] || null
    }
};
