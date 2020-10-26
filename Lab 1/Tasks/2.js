function solve(a, b) {
    if (a === 0) {
        return b;
    }

    return solve(b % a, a);
}

console.log(solve(5, 15));