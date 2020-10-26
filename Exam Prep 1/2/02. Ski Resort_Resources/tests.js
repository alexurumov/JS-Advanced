let SkiResort = require('./solution');
let assert = require('chai').assert;

describe('SkiResort', function () {

    let resort;
    let rName = 'Correct Name';

    beforeEach(function() {
        resort = new SkiResort(rName);
    });

    describe('constructor behaviour', function() {
        it('sets default values to private properties', function() {
            assert.equal(resort.name, rName);
            assert.equal(resort.voters, 0);
            assert.deepEqual(resort.hotels, []);
        });
    });

    describe('bestHotel getter behaviour', function() {
        it('when no voters should return "No voters yet"', function() {
            assert.equal(resort.bestHotel, "No votes yet");
        });

        it('when voters should return correct result', function() {
            resort.build('hotel1', 10);
            resort.book('hotel1', 3);
            resort.leave('hotel1', 3, 10);

            resort.build('hotel2', 10);
            resort.book('hotel2', 5);
            resort.leave('hotel2', 5, 8);

            let result = resort.bestHotel;
            assert.equal(result, 'Best hotel is hotel2 with grade 40. Available beds: 10');
        });
    });

    describe('build() behaviour', function() {
        it('if input is incorrect - name', function() {
            let result = () => resort.build('', 2);
            assert.throw(result, Error, 'Invalid input');
        });

        it('if input is incorrect - beds', function() {
            let result = () => resort.build('name', 0);
            assert.throw(result, Error, 'Invalid input');
        });

        it('if input is correct should create hotel and add it to hotels array', function() {
            let result = resort.build('name', 5);
            assert.deepEqual(resort.hotels, [{name: 'name',beds: 5,points: 0}]);
            assert.equal(result, 'Successfully built new hotel - name');
        });

    });

    describe('book() behaviour', function() {
        it('if input is incorrect - name', function() {
            let result = () => resort.book('', 2);
            assert.throw(result, Error, 'Invalid input');
        });

        it('if input is incorrect - beds', function() {
            let result = () => resort.book('name', 0);
            assert.throw(result, Error, 'Invalid input');
        });

        it('if hotel name does not exist', function() {
            resort.build('hotel1', 10);
            let result = () => resort.book('hotel2', 1);
            assert.throw(result, Error, 'There is no such hotel');
        });

        it('if hotel exists, but there are not enough beds', function() {
            resort.build('hotel1', 10);
            let result = () => resort.book('hotel1', 11);
            assert.throw(result, Error, 'There is no free space');
        });

        it('if input, hotel and beds are correct -> it should return success message and decrease available beds in hotel', function() {
            resort.build('hotel1', 10);
            let result = resort.book('hotel1', 3);
            assert.equal(result, 'Successfully booked');
            assert.deepEqual(resort.hotels[0].beds, 7);
        });

    });

    describe('leave() behaviour', function() {
        it('if input is incorrect - name', function() {
            let result = () => resort.leave('', 2, 10);
            assert.throw(result, Error, 'Invalid input');
        });

        it('if input is incorrect - beds', function() {
            let result = () => resort.leave('name', 0, 10);
            assert.throw(result, Error, 'Invalid input');
        });

        it('if hotel name does not exist', function() {
            resort.build('hotel1', 10);
            let result = () => resort.leave('hotel2', 1, 10);
            assert.throw(result, Error, 'There is no such hotel');
        });

        it('if input and hotel are correct -> it should return success message and set hotel points, free beds and set voters correctly', function() {
            resort.build('hotel1', 10);
            resort.book('hotel1', 3);
            let result = resort.leave('hotel1', 3, 10);
            
            assert.equal(result, '3 people left hotel1 hotel');
            assert.deepEqual(resort.hotels[0].points, 30);
            assert.deepEqual(resort.hotels[0].beds, 10);
            assert.deepEqual(resort.voters, 3);
        });
        
    });

    describe('averageGrade() behaviour', function() {
        it('if no voters', function() {
            let result = resort.averageGrade();
            assert.equal(result, 'No votes yet');
        });

        it('if voters -> should return correct average grade', function() {
            resort.build('hotel1', 10);
            resort.book('hotel1', 3);
            resort.leave('hotel1', 3, 10);

            resort.build('hotel2', 10);
            resort.book('hotel2', 5);
            resort.leave('hotel2', 5, 8);
            
            let result = resort.averageGrade();

            assert.equal(result, `Average grade: ${(3 * 10 + 5 * 8) / 8}`);
            
        });
        
    });
});
