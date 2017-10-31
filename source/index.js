const zipcodes = require('./zipcodes.json');

module.exports = {
    find(zipcode) {
        return zipcodes[zipcode] || null;
    },
    reverse(location) {
        return Object.keys(zipcodes).find((zipcode) => {
            const value = zipcodes[zipcode];
            if (typeof value === 'string') {
                return value === location;
            }
            return value.includes(location);
        });
    }
};
