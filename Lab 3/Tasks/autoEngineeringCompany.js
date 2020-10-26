function carRegister(input) {
    const cars = input.reduce((acc, curr) => {
        let [car, model, quantity] = curr.split(' | ');
        if (acc[car]) {
            if (acc[car][model]) {
                acc[car][model] += Number(quantity);
            } else {
                acc[car][model] = Number(quantity); 
            }
        } else {
            acc[car] = {[model]: Number(quantity)};
        }
        return acc;
    }, {});

    for (const car in cars) {
        console.log(car);
        for (const model in cars[car]) {
            console.log(`###${model} -> ${cars[car][model]}`);
        }
    }
}

console.log(carRegister(['Audi | Q7 | 1000', 

'Audi | Q6 | 100', 

'BMW | X5 | 1000', 

'BMW | X6 | 100', 

'Citroen | C4 | 123', 

'Volga | GAZ-24 | 1000000', 

'Lada | Niva | 1000000', 

'Lada | Jigula | 1000000', 

'Citroen | C4 | 22', 

'Citroen | C5 | 10'] ))