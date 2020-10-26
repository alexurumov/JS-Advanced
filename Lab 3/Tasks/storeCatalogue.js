function storeCatalogue(input) {
    
    let parsedData = input.reduce((acc, cur) => {
        let category = cur.substring(0, 1);
        if (acc[category]) {
            acc[category] = [...acc[category], cur];
        } else {
            acc[category] = [cur];
        }
        return acc;
    }, {});

    Object.keys(parsedData)
        .sort()
        .map(x => {
            console.log(x);
            parsedData[x]
                .sort()
                .map(prd => {
                    console.log(`  ${prd.split(' : ').join(': ')}`);
                })
        });

    // function sortByKeys(object) {
    //     return Object.keys(object)
    //     .sort()
    //     .reduce((acc, cur) => {
    //         acc[cur] = object[cur];
    //         return acc;
    //     }, {} );
    // }
    
}

console.log(storeCatalogue(['Appricot : 20.4', 

'Fridge : 1500', 

'TV : 1499', 

'Deodorant : 10', 

'Boiler : 300', 

'Apple : 1.25', 

'Anti-Bug Spray : 15', 

'T-Shirt : 10'] ));