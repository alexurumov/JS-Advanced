function countWords(input) {

    const results = input[0].match(/\w+/g);

    const resultObj = {};

    for (let i = 0; i < results.length; i++) {
        const element = results[i];
        let keys = Object.keys(resultObj);
        if (keys.includes(element)) {
            resultObj[element] += 1;
        } else {
            resultObj[element] = 1;
        }
    }

    return JSON.stringify(resultObj);

}

console.log(countWords( "['Far too slow, you're far too slow.'] " ));

