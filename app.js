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
            const argumentName = key.replace('--', '');
            const values = arguments_map.get(argumentName) || [];

            values.push(value);
            arguments_map.set(argumentName, values);
        });

    return arguments_map;
}







// Used for testing purposes
module.exports = {
    parseCLIArguments,
};
