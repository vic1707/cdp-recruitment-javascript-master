// allows us to use console.log with objects and get the full object printed
const { inspect } = require('util');
const logCompleteObject = (obj) => console.log(inspect(obj, { showHidden: false, depth: null }));

module.exports = {
    logCompleteObject,
};
