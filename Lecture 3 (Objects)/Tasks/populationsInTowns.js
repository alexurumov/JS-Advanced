function populationsInTowns(input) {

    const resultObj = {};

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        let args = element.split(' <-> ');
        let town = args[0];
        let population = Number(args[1]);
        const keys = Object.keys(resultObj);
        if (keys.includes(town)) {
            resultObj[town] += population;
        } else {
            resultObj[town] = population;
        }
    }

    for (const key in resultObj) {
        console.log(`${key} : ${resultObj[key]}`);
    }

}
