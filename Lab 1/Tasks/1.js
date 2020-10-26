function solve(fruit, weight, price) {
    let grams = (weight / 1000);
    let money = (grams * price).toFixed(2);

    return `I need $${money} to buy ${grams.toFixed(2)} kilograms ${fruit}.`;
}

console.log(solve('apple', 1563, 2.35));