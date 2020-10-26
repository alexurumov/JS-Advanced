function coffeeMachine(arr) {
    let result = '';
    let income = 0;

    for (let i = 0; i < arr.length; i++) {
        const order = arr[i] + '';
        const orderDetails = order.split(', ');

        let detailsIndex = 0;
        let money = Number(orderDetails[detailsIndex++]);
        
        let type = orderDetails[detailsIndex++];
        
        let cost = +0.8;
        
        if (type === 'coffee') {
            let coffeeType = orderDetails[detailsIndex++];
            if (coffeeType === 'decaf') {
                cost += 0.1;
            }
        }

        if (!Number.isInteger(Number(orderDetails[detailsIndex]))) {
            milkPrice = Number((cost * 0.1).toFixed(1));
            cost += milkPrice;
            detailsIndex++;
        }

        let sugar = parseInt(orderDetails[detailsIndex]);
        if (sugar !== 0) {
            cost += +0.1;
        }

        if (money - cost >= 0) {
            income += cost;
            result += `You ordered ${type}. Price: $${cost.toFixed(2)} Change: $${(money - cost).toFixed(2)}\n`;
        } else {
            result += `Not enough money for ${type}. Need $${(cost - money).toFixed(2)} more\n`;
        }
    }

    result += `Income Report: $${income.toFixed(2)}`;

    return result;
}

console.log(coffeeMachine(['8.00, coffee, decaf, 4', '1.00, tea, 2']));