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

module.exports = {
    calculateAndAppendCountsPure,
};
