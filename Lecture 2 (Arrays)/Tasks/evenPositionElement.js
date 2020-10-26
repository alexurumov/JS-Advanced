function evenPositionElement(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (i % 2 === 0) {
            result += element + ' ';
        }
    }

    return result;
}

console.log(evenPositionElement(['20', '30', '40']));