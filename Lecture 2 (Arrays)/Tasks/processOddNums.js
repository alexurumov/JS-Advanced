function processOddNums(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (i % 2 !== 0) {
            result.push(+element * 2);
        }
    }

    return result.reverse().join(' ');
}

console.log(processOddNums([3, 0, 10, 4, 7, 3]));