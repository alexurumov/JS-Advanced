function solve(arr) {
    let num = parseInt(arr[0]);
    let result = '';
    for (let i = 0; i < 5; i++) {
        const element = arr[i + 1];
        switch (element) {
            case 'chop': num /= 2;
            break;
            case 'dice': num = Math.sqrt(num);
            break;
            case 'spice': num += 1;
            break;
            case 'bake': num *= 3;
            break;
            case 'fillet': num *= 0.8;
            break;
        }
        result += `${num}\n`;
    }
    return result;
}

console.log(solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']));