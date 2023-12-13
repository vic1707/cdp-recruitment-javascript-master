const { calculateAndAppendCounts, filterByAnimals, parseCLIArguments } = require('../app');
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

describe('Counting', () => {
    it('Should append counts to the example', () => {
        const given = [
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
                    {
                        name: 'Dennis Franci',
                        animals: [],
                    },
                    {
                        name: 'Anthony Bruno',
                        animals: [
                            { name: 'Caracal' },
                            { name: 'Anteater' },
                            { name: 'Kiwa Hirsuta' },
                            { name: 'Zooplankton' },
                            { name: 'Tarantula' },
                            { name: 'Oryx' },
                        ],
                    },
                ],
            },
        ];

        const expected = [
            {
                name: 'Uzuzozne [3]',
                people: [
                    {
                        name: 'Lillie Abbott [1]',
                        animals: [
                            {
                                name: 'John Dory',
                            },
                        ],
                    },
                    {
                        name: 'Dennis Franci [0]',
                        animals: []
                    },
                    {
                        name: 'Anthony Bruno [6]',
                        animals: [
                            { name: 'Caracal' },
                            { name: 'Anteater' },
                            { name: 'Kiwa Hirsuta' },
                            { name: 'Zooplankton' },
                            { name: 'Tarantula' },
                            { name: 'Oryx' },
                        ],
                    },
                ],
            },
        ];

        calculateAndAppendCounts(given);
        expect(JSON.stringify(given)).toEqual(JSON.stringify(expected)); // checks that the order of keys is the same
    });
});
