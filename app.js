/**
 * @typedef {import('./data.js').Country} Country
 */

/**
 * @type {Country[]}
 */
const { data } = require('./data.js');
Object.freeze(data);

// allows us to use console.log with objects and get the full object printed
const { inspect } = require('util');
const logCompleteObject = (obj) => console.log(inspect(obj, { showHidden: false, depth: null }));

/**
 * @description Parse CLI arguments. Arguments are expected to be in the form of:
 * --argumentName=argumentValue
 * --positionnalArgument
 * @returns {Map<String, Array<String>>} Map of arguments.
 */
function parseCLIArguments() {
    const args = process.argv.slice(2);
    /**
     * @type {Map<String, Array<String> | Boolean>}
     */
    const arguments_map = new Map();

    args
        // Filter out arguments that do not start with '--'.
        .filter((arg) => arg.startsWith('--'))
        // Parse arguments.
        .forEach((arg) => {
            const [key, value] = arg.slice(2).split('=');
            // If value is defined, it means the argument is in the form of --argumentName=argumentValue.
            if (value) {
                if (!arguments_map.has(key)) arguments_map.set(key, []);
                arguments_map.get(key).push(value);
            }
            // If value is undefined, it means the argument is in the form of --positionnalArgument.
            else {
                arguments_map.set(key, true);
            }
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

            const filteredAnimals = animals.filter(({ name }) => {
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

/**
 * @description Appends the number of people to the country name and the number of animals to the people name.
 * @param {Country[]} countries Countries to edit.
 * @returns {void}
 */
function calculateAndAppendCounts(countries) {
    countries.forEach((country) => {
        country.name += ` [${country.people.length}]`;
        country.people.forEach((person) => {
            person.name += ` [${person.animals.length}]`;
        });
    });
}

/**
 * @description `calculateAndAppendCounts` but without modification of the original array, returnsa new modified array.
 * @param {Country[]} countries
 * @returns {Country[]}
 */
function calculateAndAppendCountsPure(countries) {
    return countries.map(({ name, people }) => ({
        name: `${name} [${people.length}]`,
        people: people.map(({ name, animals }) => ({
            name: `${name} [${animals.length}]`,
            animals,
        })),
    }));
}

// Used for testing purposes
module.exports = {
    calculateAndAppendCounts,
    calculateAndAppendCountsPure,
    filterByAnimals,
    parseCLIArguments,
};
