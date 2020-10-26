function solve(arr) {
    let result = '';

    if (arr.length !== 0) {
        result += '{ ';
    }

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result += element;
        if (i % 2 === 0) {
            result += ': ';
        } else if (i === arr.length - 1) {
            result += ' }'
        }
        else {
            result += ', ';
        }
    }

    return result;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));