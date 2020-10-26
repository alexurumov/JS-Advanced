function validityChecker(arr) {
    let x1 = parseInt(arr[0]);
    let y1 = parseInt(arr[1]);
    let x2 = parseInt(arr[2]);
    let y2 = parseInt(arr[3]);

    let result = '';
    
    function distance(a, b, x, y) {
        let side1 = Math.abs(a - x);
        let side2 = Math.abs(b - y);

        if (side1 === 0) {
            return Number.isInteger(side2);    
        } else if (side2 === 0) {
            return Number.isInteger(side1);
        } else {
            return Number.isInteger(Math.sqrt(side1 ** 2 + side2 ** 2));
        }
    }
    
    result += `{${x1}, ${y1}} to {0, 0} is ${distance(x1, y1, 0, 0) ? 'valid' : 'invalid'}\n`;
    result += `{${x2}, ${y2}} to {0, 0} is ${distance(x2, y2, 0, 0) ? 'valid' : 'invalid'}\n`;
    result += `{${x1}, ${y1}} to {${x2}, ${y2}} is ${distance(x1, y1, x2, y2) ? 'valid' : 'invalid'}\n`;

    return result;
}

console.log(validityChecker([2, 1, 1, 1]));