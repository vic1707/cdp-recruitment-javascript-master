/*
    Note for review: the function `parseCLIArguments` could be removed since node.js provides a built-in function for this:
        https://nodejs.org/api/util.html#utilparseargsconfig (stable since v20.0.0)
    However, as this exercise is a technical evaluation and the function has only been stable for a short time, 
    I've assumed that you don't want it to be used.
 */

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

module.exports = {
    parseCLIArguments,
};
