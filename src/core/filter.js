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

    // filter mutates original data if a prop is an array or nested object
    // so we'll use reduce instead to keep the original data intact
    return countries.reduce((acc, { name, people }) => {
        const filteredPeople = people.reduce((acc, { name, animals }) => {
            const filteredAnimals = animals.filter(({ name }) => {
                return filters.some((filter) => name.toLowerCase().includes(filter.toLowerCase()));
            });

            // keep people only if they have at least one animal matching the filters
            if (filteredAnimals.length > 0) {
                acc.push({ name, animals: filteredAnimals });
            }
            return acc;
        }, []);

        // keep countries only if they have at least one people matching the filters
        if (filteredPeople.length > 0) {
            acc.push({ name, people: filteredPeople });
        }
        return acc;
    }, []);
}

module.exports = {
    filterByAnimals,
};
