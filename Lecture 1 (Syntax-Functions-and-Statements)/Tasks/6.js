function solve(param = 5) {
    let result = '';

    for (let i = 0; i < param; i++) {
        for (let j = 0; j < param; j++) {
            result += '* ';
        }
        result += '\n';
    }

    console.log(result);
}

solve(4);