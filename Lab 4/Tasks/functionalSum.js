const add = (function solve() {
    let sum = 0;
    
    function add(num) {
        sum += num;
        return add;
    }

    add.toString = function() {
        return sum;
    }

    return add;
})()

console.log(add(1)(2).toString())