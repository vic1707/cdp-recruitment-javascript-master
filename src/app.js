/**
 * @typedef {import('./data.js').Country} Country
 */

/**
 * @type {Country[]}
 */
const { data } = require('./data/data.js');
Object.freeze(data);

const { logCompleteObject } = require('./core/utils.js');
const { filterByAnimals } = require('./core/filter.js');
const { calculateAndAppendCountsPure } = require('./core/counting.js');
const { parseCLIArguments } = require('./core/cli.js');

//////////////////////////

function main() {
    const args = parseCLIArguments();
    const filters = args.get('filter');

    // isArray because filter could be given as a positionnal argument
    // resulting in a boolean `true` value
    let dataToLog = data;
    if (Array.isArray(filters)) {
        dataToLog = filterByAnimals(dataToLog, filters);
    }
    if (args.has('count')) {
        dataToLog = calculateAndAppendCountsPure(dataToLog);
    }
    logCompleteObject(dataToLog);
}

// ensures to run main only if this file is executed directly
if (require.main === module) {
    main();
}
