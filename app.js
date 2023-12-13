/**
 * @typedef {import('./data.js').Country} Country
 */

/**
 * @type {Country[]}
 */
const { data } = require('./data.js');

/**
 * @description Parse CLI arguments. Arguments are expected to be in the form of:
 * --argumentName=argumentValue
 * @returns {Map<String, Array<String>>} Map of arguments.
 */
function parseCLIArguments() {
    const args = process.argv.slice(2);
    /**
     * @type {Map<String, Array<String>>}
     */
    const arguments_map = new Map();

    args
        // Filter out arguments that do not start with '--' and do not contain '='.
        .filter((arg) => arg.startsWith('--') && arg.includes('='))
        // Extract argument name and value. Add them to the map.
        .forEach((arg) => {
            const [key, value] = arg.split('=');
            const argumentName = key.slice(2);
            const values = arguments_map.get(argumentName) || [];

            values.push(value);
            arguments_map.set(argumentName, values);
        });

    return arguments_map;
}

/**
 * @description Deep filter countries by partial animal names.
 * @param {Country[]} countries Countries to filter.
 * @param {String[]} filters Partial animal names to filter by.
 * @returns {Country[]} Filtered countries.
 */
function filterByAnimals(countries, filters) {
    if (filters.length === 0) {
        return countries;
    }

    return countries.filter((country) => {
        const { people } = country;

        const filteredPeople = people.filter((person) => {
            const { animals } = person;

            const filteredAnimals = animals.filter((animal) => {
                const { name } = animal;

                return filters.some((filter) => name.includes(filter));
            });

            // Update the animals array
            person.animals = filteredAnimals;

            return filteredAnimals.length > 0;
        });
        
        // Update the people array
        country.people = filteredPeople;

        return filteredPeople.length > 0;
    });
}

// Used for testing purposes
module.exports = {
    filterByAnimals,
    parseCLIArguments,
};
