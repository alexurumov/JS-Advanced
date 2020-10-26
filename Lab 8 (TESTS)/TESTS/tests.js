let StringBuilder = require('./stringBuilder');
let assert = require('chai').assert;
let expect = require('chai').expect;

describe('StringBuilder', () => {

    describe('constructor()', () => {
        it('without param', () => {
            let result = new StringBuilder();
            assert.deepEqual(result._stringArray, [], 'Does not return correct result');
        });

        it('with param which is not string', () => {
            let result = () => new StringBuilder(true);
            assert.throw(result, TypeError, 'Argument must be string', 'Does not throw Type Error');
        });

        it('with param which is string', () => {
            let result = new StringBuilder('word');
            assert.deepEqual(result._stringArray, ['w', 'o', 'r', 'd'], 'Does not return correct result');
        });
        
    });

    describe('append() behaviour', () => {
        
        it('with input which is not string', () => {
            let result = () => new StringBuilder({num: 1});
            assert.throw(result, TypeError, 'Argument must be string', 'Doew not throw Type Error');
        });

        it('with input which is empty string', () => {
            let result = new StringBuilder('wo');
            result.append('');
            assert.deepEqual(result._stringArray, ['w', 'o'], 'Does not return correct result');
        });

        it('with input which is string', () => {
            let result = new StringBuilder('wo');
            result.append('rd');
            assert.deepEqual(result._stringArray, ['w', 'o', 'r', 'd'], 'Does not return correct result');
        });
    });

    describe('prepend() behaviour', () => {
        
        it('with input which is not string', () => {
            let result = () => new StringBuilder({num: 1});
            assert.throw(result, TypeError, 'Argument must be string', 'Doew not throw Type Error');
        });

        it('with input which is empty string', () => {
            let result = new StringBuilder('wo');
            result.prepend('');
            assert.deepEqual(result._stringArray, ['w', 'o'], 'Does not return correct result');
        });

        it('with input which is string', () => {
            let result = new StringBuilder('rd');
            result.prepend('wo');
            assert.deepEqual(result._stringArray, ['w', 'o', 'r', 'd'], 'Does not return correct result');
        });
    });

    describe('insertAt() behaviour', () => {
        
        it('with input which is not string', () => {
            let result = () => new StringBuilder(true);
            assert.throw(result, TypeError, 'Argument must be string', 'Doew not throw Type Error');
        });

        it('with index which is empty string', () => {
            let result = new StringBuilder('wo');
            result.insertAt('');
            assert.deepEqual(result._stringArray, ['w', 'o'], 'Does not return correct result');
        });

        it('with input which is string', () => {
            let result = new StringBuilder('wrd');
            result.insertAt('o', 1);
            assert.deepEqual(result._stringArray, ['w', 'o', 'r', 'd'], 'Does not return correct result');
        });
    });

    describe('remove() behaviour', () => {

        it('with length 0', () => {
            let result = new StringBuilder('word');
            result.remove(1, 0);
            assert.deepEqual(result._stringArray, ['w', 'o', 'r', 'd'], 'Does not return correct result');
        });

        it('with start index and length > 0', () => {
            let result = new StringBuilder('wordrd');
            result.remove(4, 2);
            assert.deepEqual(result._stringArray, ['w', 'o', 'r', 'd'], 'Does not return correct result');
        });
    });

    describe('toString() behaviour', () => {

        it('with empty string', () => {
            let result = new StringBuilder('');
            result.toString();
            assert.deepEqual(result._stringArray, [], 'Does not return correct result');
        });

        it('with string', () => {
            let result = new StringBuilder('word');
            result.toString();
            assert.deepEqual(result._stringArray, ['w', 'o', 'r', 'd'], 'Does not return correct result');
        });
    });

});


// describe('mathEnforcer', () => {

//     describe('addFive() behaviour', () => {

//         it('chech outout when input is NaN', () => {
//             let result = mathEnforcer.addFive(true);
//             assert.equal(result, undefined, 'Does not return undefined');
//         });

//         it('chech outout when input is positive number', () => {
//             let result = mathEnforcer.addFive(12);
//             assert.equal(result, 17, 'Does not return correct result');
//         });

//         it('chech outout when input is negative number', () => {
//             let result = mathEnforcer.addFive(-5);
//             assert.equal(result, 0, 'Does not return correct result');
//         });

//         it('chech outout when input is floating number', () => {
//             let result = mathEnforcer.addFive(-6.2);
//             expect(result).to.be.closeTo(-1.2, 0.01, 'Does not return correct result');
//         });
    
//     });

//     describe('subtractTen() behaviour', () => {

//         it('chech outout when input is NaN', () => {
//             let result = mathEnforcer.subtractTen([]);
//             assert.equal(result, undefined, 'Does not return undefined');
//         });

//         it('chech outout when input is positive number', () => {
//             let result = mathEnforcer.subtractTen(6);
//             assert.equal(result, -4, 'Does not return correct result');
//         });

//         it('chech outout when input is negative number', () => {
//             let result = mathEnforcer.subtractTen(-7);
//             assert.equal(result, -17, 'Does not return correct result');
//         });

//         it('chech outout when input is floating number', () => {
//             let result = mathEnforcer.subtractTen(1.1);
//             expect(result).to.be.closeTo(-8.9, 0.01, 'Does not return correct result');
//         });
    
//     });

//     describe('sum() behaviour', () => {

//         it ('check output when input is Nan - 1st', () => {
//             let result = mathEnforcer.sum({num1: 1}, 2);
//             assert.equal(result, undefined, 'Does not return undefined');
//         });

//         it ('check output when input is Nan - 2nd', () => {
//             let result = mathEnforcer.sum(1, false);
//             assert.equal(result, undefined, 'Does not return undefined');
//         });

//         it ('check output when input is Nan - both', () => {
//             let result = mathEnforcer.sum(true, []);
//             assert.equal(result, undefined, 'Does not return undefined');
//         });

//         it ('check output when input is positive numbers', () => {
//             let result = mathEnforcer.sum(5, 6);
//             assert.equal(result, 11, 'Does not return correct result');
//         });

//         it ('check output when input is negative numbers', () => {
//             let result = mathEnforcer.sum(-2, -8);
//             assert.equal(result, -10, 'Does not return correct result');
//         });
    
//         it ('check output when input is floating numbers', () => {
//             let result = mathEnforcer.sum(-2.2, -8.9);
//             expect(result).to.be.closeTo(-11.1, 0.01, 'Does not return correct result');
//         });

//     });

// });



// describe('lookupChar() behaviour', () => {

//     it('check result when input is incorrect type - 1st', () => {
//         let result = lookupChar(true, 2);
//         assert.equal(result, undefined, 'The result does not return undefined')
//     });

//     it('check result when input is incorrect type - 2nd', () => {
//         let result = lookupChar('string', 'index');
//         assert.equal(result, undefined, 'The result does not return undefined')
//     });

//     it('check result when input is incorrect type - both', () => {
//         let result = lookupChar([1, 2, 3], {index: 2});
//         assert.equal(result, undefined, 'The result does not return undefined')
//     });

//     it('check result when index not integer', () => {
//         let result = lookupChar('string', 1.5);
//         assert.equal(result, undefined, 'The result does not return undefined')
//     });

//     it('check result when index is incorrect - less than 0', () => {
//         let result = lookupChar('string', -1);
//         assert.equal(result, 'Incorrect index', 'The result does not return "Incorrect index"')
//     });

//     it('check result when index is incorrect - bigger than length', () => {
//         let result = lookupChar('string', 7);
//         assert.equal(result, 'Incorrect index', 'The result does not return "Incorrect index"')
//     });

//     it('check result when input is correct type and index is in bounds', () => {
//         let result = lookupChar('strIng', 3);
//         assert.equal(result, 'I', 'The result does not return correct result')
//     });

// });

// describe('isOddOrEven() behaviour', () => {

//     it('check outcome when input is boolean', () => {
//         let result = isOddOrEven(false);
//         assert.equal(result, undefined, 'The result does not return undefined');
//     });

//     it('check outcome when input is number', () => {
//         let result = isOddOrEven(15);
//         assert.equal(result, undefined, 'The result does not return undefined');
//     });

//     it('check the string - when even', () => {
//         let result = isOddOrEven("123456");
//         assert.equal(result, 'even', 'The result does not return even');
//     });

//     it('check the string - when odd', () => {
//         let result = isOddOrEven("12345");
//         assert.equal(result, 'odd', 'The result does not return odd');
//     });

//     // it('', () => {
        
//     // });

// });