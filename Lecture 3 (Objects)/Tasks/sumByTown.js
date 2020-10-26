function sumByTown(input) {

    const resultObj = {};

    for (let i = 0; i < input.length; i += 2) {
        const element = input[i];
        let keys = Object.keys(resultObj);
        if (keys.includes(element)) {
            resultObj[element] += Number(input[i + 1]);
        } else {
            resultObj[element] = Number(input[i + 1]);
        }
    }

    return JSON.stringify(resultObj);
}

console.log(sumByTown(['Sofia', 

'20', 

'Varna', 

'3', 

'sofia', 

'5', 

'varna', 

'4'] ))