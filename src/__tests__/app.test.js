const { calculateAndAppendCountsPure, filterByAnimals, parseCLIArguments } = require('../app');
const { data } = require('../data/data.js');
Object.freeze(data);

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

    it('should allow positionnal arguments (no `=`)', () => {
        process.argv = ['node', 'app.js', '--count'];
        const expected = new Map([['count', true]]);
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
        expect(data).toEqual(expected);
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
        expect(res).toEqual(expected);
    });

    it('Should keep keys order', () => {
        const given = [
            {
                name: 'Uzuzozne',
                people: [
                    {
                        name: 'Dennis Franci',
                        animals: [
                            { name: 'Grouse' },
                            { name: 'Donkey' },
                            { name: 'Hapuka' },
                            { name: 'Cheetah' },
                            { name: 'Turkey' },
                            { name: 'Carp' },
                            { name: 'Octopus' },
                            { name: 'Silkworm' },
                            { name: 'Bearded Dragon' },
                        ],
                    },
                ],
            },
        ];
        const expected = [
            {
                name: 'Uzuzozne',
                people: [
                    {
                        name: 'Dennis Franci',
                        animals: [{ name: 'Donkey' }, { name: 'Turkey' }],
                    },
                ],
            },
        ];

        const res = filterByAnimals(given, ['ke']);
        expect(res).toEqual(expected);
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
                        animals: [],
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

        const res = calculateAndAppendCountsPure(given);

        expect(res).toEqual(expected);
    });
});
