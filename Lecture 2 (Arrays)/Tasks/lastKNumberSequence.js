function lastKNums(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let sumArr;
        if (result.length < k) {
            sumArr = result.slice();
        } else {
            sumArr =  result.slice((result.length - k));
        }
        result.push(sumArr.reduce((a, b) => a + b));
    }

    return result.join(" ");
}

console.log(lastKNums(8, 2));