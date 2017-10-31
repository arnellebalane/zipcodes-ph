import zipcodes from './zipcodes.json';

export default {
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
        }) || null;
    }
};
