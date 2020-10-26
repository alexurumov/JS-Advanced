function lowestPrices(input) {

    const products = [];

    for (let i = 0; i < input.length; i++) {
        const line = input[i];
        const args = line.split(' | ');
        let town = args[0];
        let productName = args[1];
        let price = Number(args[2]);

        const filterredProducts = products.filter(product => product.name === productName);

        if (filterredProducts.length === 0) {
            const productObj = {};
            productObj.name = productName;
            productObj.townsAndPrices = [];
            const townAndPrice = {};
            townAndPrice.town = town;
            townAndPrice.price = price;
            productObj.townsAndPrices.push(townAndPrice);
            products.push(productObj);
        } else {
            const productObj = filterredProducts[0];
            const townAndPrice = {};
            townAndPrice.town = town;
            townAndPrice.price = price;
            productObj.townsAndPrices.push(townAndPrice);
        }
    }

    products.forEach(product => {
        product.townsAndPrices.sort((a, b) => a.price - b.price);
        console.log(`${product.name} -> ${product.townsAndPrices[0].price} (${product.townsAndPrices[0].town})`);
    })

}

lowestPrices(['Sofia City | Audi | 100000', 
'Sofia City | BMW | 100000', 
'Sofia City | Mitsubishi | 10000', 
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'New York City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Mexico City | Audi | 100000',
'Washington City | Mercedes | 1000'] );

