function solve(num) {

    const digit = num % 10;
    let areEqual = true;
    let number1 = Number(num);

    for (let i = 0; i < num.toString().length; i++) {
        const element = number1 % 10;
        if (digit !== element) {
            areEqual = false;
            break;
        }
        number1 = Math.floor(number1 / 10);
    }

    let sum = 0;
    let number2 = Number(num);

    for (let i = 0; i < num.toString().length; i++) {
        const element = number2 % 10;
        sum += element;
        number2 = Math.floor(number2 / 10);
    }
    
    console.log(areEqual);
    console.log(sum);
}

solve(0000000000);