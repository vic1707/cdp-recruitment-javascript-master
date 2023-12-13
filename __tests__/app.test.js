const { parseCLIArguments } = require('../app');

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
