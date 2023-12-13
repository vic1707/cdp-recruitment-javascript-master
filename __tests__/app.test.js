const { filterByAnimals, parseCLIArguments } = require('../app');
const { data } = require('../data.js');
const DATA_AS_STRING = JSON.stringify(data); // Used to freeze keys order in data

describe('CLI Args parsing', () => {
    it('should parse one argument', () => {
        process.argv = ['node', 'app.js', '--filter=ry'];
        const expected = new Map([['filter', ['ry']]]);
        expect(parseCLIArguments()).toEqual(expected);
    });

    it('should parse multiple arguments', () => {
        process.argv = ['node', 'app.js', '--filter=ry', '--filter=uc'];
        const expected = new Map([['filter', ['ry', 'uc']]]);
        expect(parseCLIArguments()).toEqual(expected);
    });

    it('should ignore arguments without "="', () => {
        process.argv = ['node', 'app.js', '--filter'];
        const expected = new Map();
        expect(parseCLIArguments()).toEqual(expected);
    });

    it('should ignore arguments without "--"', () => {
        process.argv = ['node', 'app.js', 'filter=ry'];
        const expected = new Map();
        expect(parseCLIArguments()).toEqual(expected);
    });
});

describe('Filtering', () => {
    it("Shouldn't edit the original data if no filters are provided", () => {
        const expected = data;
        filterByAnimals(data, []);
        // Check that data no new object was created
        expect(data).toEqual(expected);
        // Check that data is the same as before
        expect(JSON.stringify(data)).toEqual(DATA_AS_STRING);
    });
});
