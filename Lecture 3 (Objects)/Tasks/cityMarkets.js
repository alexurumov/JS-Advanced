function cityMarkets(input) {

    const towns = [];

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        const args = element.split(' -> ');
        let townName = args[0];
        let productName = args[1];
        let incomeDetails = args[2];
        const incomeArgs = incomeDetails.split(' : ');
        let amountSold = Number(incomeArgs[0]);
        let priceForUnit = Number(incomeArgs[1]);
        let income = amountSold * priceForUnit;

        const resultArr = towns.filter(town => town['Town'] === townName);
        if (resultArr.length === 0) {
            const town = {};
            town.Town = townName;
            town.Products = {};
            town.Products[productName] = income;
            towns.push(town);
        } else {
            const town = resultArr[0];
            const productKeys = Object.keys(town.Products);
            if (productKeys.includes(productName)) {
                town.Products[productName] += income;
            } else {
                town.Products[productName] = income;
            }
        }
    }

    towns.forEach(town => {
        console.log(`Town - ${town.Town}`);
        for (const key in town.Products) {
            console.log(`$$$${key} : ${town.Products[key]}`);
        }
    })

}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000', 

'Sofia -> Raspberry -> 200000 : 1500', 

'Sofia -> Audi Q7 -> 200 : 100000', 

'Montana -> Portokals -> 200000 : 1', 

'Montana -> Qgodas -> 20000 : 0.2', 

'Montana -> Chereshas -> 1000 : 0.3'] );