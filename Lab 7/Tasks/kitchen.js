class Kitchen {
    menu = {};
    productsInStock = {}; 
    actionsHistory = [];
    
    constructor(budget) {
        this.budget  = budget;
    }

    loadProducts(productsArr) {
        productsArr.reduce((acc, curr) => {
            let [productName, productQuantity, productPrice] = curr.split(' ');
            let productCost = productQuantity * productPrice;
            if (this.budget >= productCost) {
                
                if (!acc[productName]) {
                    acc[productName] = 0;
                } 

                acc[productName] += productQuantity;

                this.budget -= productCost;

                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);

            } else {

                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);

            }

            return acc;
        }, this.productsInStock);

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProductsArr, price) {

        if (!this.menu[meal]) {
            this.menu[meal] = {
                neededProducts: {},
                price: Number(price)
            }

            neededProductsArr.reduce((acc, curr) => {
                let[productName, productQuantity] = curr.split(' ');
                acc[productName] = productQuantity;
                return acc;
            }, this.menu[meal].neededProducts);

            return `"Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?"`
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }

    showTheMenu() {
        let result = '';
        
        if (Object.keys(this.menu).length === 0) {
            result += 'Our menu is not ready yet, please come later...';
        } else {
            for (const meal in this.menu) {
                result += `${meal} - $ ${this.menu[meal].price}\n`;    
            }
            
        }

        return result.trim();
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        let hasNeeded = true;
        
        for (const [product, quantity] of Object.entries(this.menu[meal].neededProducts)) {
            if (!this.productsInStock[product]) {
                hasNeeded = false;
                break;
            } 
            if (this.productsInStock[product].productQuantity < quantity) {
                hasNeeded = false;
                break;
            }   
        }
            
        if (!hasNeeded) {
            return `"For the time being, we cannot complete your order (${meal}), we are very sorry..."`;
        }

        for (const [product, quantity] of Object.entries(this.menu[meal].neededProducts)) {
            this.productsInStock[product] -= quantity;
        }
                                                                                                        //TODO
        return `"Your order (${meal}) will be completed in the next 30 minutes and will cost you ${meal.price}." `
        
    }
}


let kitchen = new Kitchen (10000); 
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50'])); 
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99)); 
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55)); 
console.log(kitchen.showTheMenu()); 
console.log(kitchen.makeTheOrder('Pizza'));
console.log(kitchen.makeTheOrder('frozenYogurt'));