let Parser = require("./solution.js");
let assert = require("chai").assert;


describe("MyTests", () => {
    
    describe('constructor behaviour', () => {
        
        it('sets correct private properties when instantiated with data param', () => {
            let data = '[{"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"}]';
            let parser = new Parser(data);
            assert.deepEqual(parser.data, JSON.parse(data));

        });

    });

    describe('data getter behaviour', () => {
        
        it('with Empty Array => should return empty array', () => {
            let data = '[]';
            let parser = new Parser(data);
            assert.deepEqual(parser.data, JSON.parse(data));
        });

        it('with non Empty Array => should return correct array', () => {
            let data = '[{"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"}]';
            let parser = new Parser(data);
            assert.deepEqual(parser.data, JSON.parse(data));
        });

    });

    describe('print() behaviour', () => {
        
        it('should return empty table when no _data', () => {
            let data = '[]';
            let parser = new Parser(data);
            assert.equal(parser.print(), 'id|name|position');
        });

        it('should return correct table when _data', () => {
            let data = '[{"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"}]';
            let parser = new Parser(data);
            assert.equal(parser.print(),'id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR');
        });
    });

    describe('addEntries() behaviour', () => {

        it('when data => should add entries correctly', () => {
            let data = '[]';
            let parser = new Parser(data);
            let result = parser.addEntries('Steven:tech-support Edd:administrator');
            assert.equal(result, 'Entries added!');
            assert.deepEqual(parser.data, JSON.parse('[{"Steven":"tech-support"},{"Edd":"administrator"}]'));
        });
    });

    describe('removeEntry() behaviour', () => {

        it('when no such key => should throw error', () => {
            let data = '[]';
            let parser = new Parser(data);
            let result = () => parser.removeEntry('key');
            assert.throw(result, 'There is no such entry!');
        });

        it('when key => should add property deleted', () => {
            let data = '[{"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"}]';
            let parser = new Parser(data);
            let result = parser.removeEntry('Nancy');
            assert.equal(result, 'Removed correctly!');
            assert.deepEqual(parser.data, JSON.parse('[{"John":"developer"},{"Kate": "HR"}]'))
        });
    });

});