const { filterByAnimals, parseCLIArguments } = require('../app');
const { data } = require('../data.js');
Object.freeze(data);
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

    it('Should pass the example', () => {
        const expected = [
            {
                name: 'Uzuzozne',
                people: [
                    {
                        name: 'Lillie Abbott',
                        animals: [
                            {
                                name: 'John Dory',
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Satanwi',
                people: [
                    {
                        name: 'Anthony Bruno',
                        animals: [
                            {
                                name: 'Oryx',
                            },
                        ],
                    },
                ],
            },
        ];
        const res = filterByAnimals(data, ['ry']);
        expect(JSON.stringify(res)).toEqual(JSON.stringify(expected)); // checks that the order of keys is the same
    });
});
