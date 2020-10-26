let PizzUni = require('./solution');
let assert = require('chai').assert;

describe('PizzUni', function () {

    let uni;

    beforeEach(function() {
        uni = new PizzUni();
    });

    describe('constructor behaviour', function() {
        it('should create private properties correctly', function() {
            assert.deepEqual(uni.registeredUsers, []);
            assert.deepEqual(uni.availableProducts, {
                pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                drinks: ['Coca-Cola', 'Fanta', 'Water']
            });
            assert.deepEqual(uni.orders, []);
        });
    });
    
    describe('registerUser() behaviour', function() {
        
        it('with non existing email => should create User and add it to registeredUsers ', function() {
            let result = uni.registerUser('email');
            assert.deepEqual(result, {
                email: 'email',
                orderHistory: []
            });
            assert.deepEqual(uni.registeredUsers, [{
                email: 'email',
                orderHistory: []
            }]);
        });
        
        it('with existing email => should throw Error', function() {
            uni.registerUser('email');
            let result = () => uni.registerUser('email');
            assert.throw(result, Error, 'This email address (email) is already being used!');
        }); 
    });

    describe('makeAnOrder() behaviour', function() {
        
        beforeEach(function() {
            uni.registerUser('email');
        });

        it('with invalid input - email', function() {
            let result = () => uni.makeAnOrder('wrong email', 'Italian Style', 'Fanta');
            assert.throw(result, Error, 'You must be registered to make orders!');
        });

        it('with invalid input - pizza', function() {
            let result = () => uni.makeAnOrder('email', 'wrong pizza', 'Fanta');
            assert.throw(result, Error, 'You must order at least 1 Pizza to finish the order.');
        });

        it('with invalid input - drink => should not include drink to order', function() {
            uni.makeAnOrder('email', 'Italian Style', 'invalid drink');
            assert.deepEqual(uni.orders[0], {
                orderedPizza: 'Italian Style',
                email: 'email',
                status: 'pending'
            });
            assert.deepEqual(uni.registeredUsers[0].orderHistory, [{orderedPizza: 'Italian Style'}]);
        });

        it('with valid input => should apend user order history + uni orders', function() {
            let result = uni.makeAnOrder('email', 'Italian Style', 'Fanta');
            assert.equal(result, 0);
            assert.deepEqual(uni.orders[0], {
                orderedPizza: 'Italian Style',
                orderedDrink: 'Fanta', 
                email: 'email',
                status: 'pending'
            });
            assert.deepEqual(uni.registeredUsers[0].orderHistory, [{orderedPizza: 'Italian Style', orderedDrink: 'Fanta'}]);
        });
    });

    describe('detailsAboutMyOrder() behaviour', function() {

        it('if id is valid => should return correct order details (when pending)', function() {
            uni.registerUser('email');
            uni.makeAnOrder('email', 'Italian Style', 'Fanta');
            uni.makeAnOrder('email', 'Barbeque Classic', 'Coca-Cola');
            let result = uni.detailsAboutMyOrder(1);
            assert.equal(result, `Status of your order: pending`);
        });

        it('if id is valid => should return correct order details (when completed)', function() {
            uni.registerUser('email');
            uni.makeAnOrder('email', 'Italian Style', 'Fanta');
            uni.makeAnOrder('email', 'Barbeque Classic', 'Coca-Cola');
            uni.completeOrder();
            let result = uni.detailsAboutMyOrder(0);
            assert.equal(result, `Status of your order: completed`);
        });
        
    });

    describe('doesTheUserExist() behaviour', function() {

        beforeEach(function() {
            uni.registerUser('email');
        });

        it('with valid email => return correct user', function() {
            let result = uni.doesTheUserExist('email');
            assert.deepEqual(result, uni.registeredUsers[0]);
        });

        it('with invalid email => return undefined', function() {
            let result = uni.doesTheUserExist('wrongEmail');
            assert.deepEqual(result, undefined);
        });

    });

    describe('completeOrder() behaviour', function() {

        beforeEach(function() {
            uni.registerUser('email');
            uni.makeAnOrder('email', 'Italian Style', 'Fanta');
            uni.makeAnOrder('email', 'Barbeque Classic', 'Coca-Cola');
            uni.makeAnOrder('email', 'Classic Margherita', 'Water');
        });

        it('when orders => should complete the first pending order', function() {
            uni.completeOrder();
            assert.deepEqual(uni.orders, [{
                orderedPizza: 'Italian Style',
                orderedDrink: 'Fanta', 
                email: 'email',
                status: 'completed'
            }, {
                orderedPizza: 'Barbeque Classic',
                orderedDrink: 'Coca-Cola', 
                email: 'email',
                status: 'pending'
            }, {
                orderedPizza: 'Classic Margherita',
                orderedDrink: 'Water', 
                email: 'email',
                status: 'pending'
            }]);
        });

        it('when called 3 times => should complete the first 3 pending orders', function() {
            uni.completeOrder();
            uni.completeOrder();
            uni.completeOrder();

            assert.deepEqual(uni.orders, [{
                orderedPizza: 'Italian Style',
                orderedDrink: 'Fanta', 
                email: 'email',
                status: 'completed'
            }, {
                orderedPizza: 'Barbeque Classic',
                orderedDrink: 'Coca-Cola', 
                email: 'email',
                status: 'completed'
            }, {
                orderedPizza: 'Classic Margherita',
                orderedDrink: 'Water', 
                email: 'email',
                status: 'completed'
            }]);
        });

    });
    
});
