function diagonalSums(arr) {

    let diagonal1 = 0;
    let diagonal2 = 0;

    for (let i = 0; i < arr.length; i++) {
        
        const element1 = arr[i][i];
        diagonal1 += +element1;
        
        const element2 = arr[i][arr.length - 1 - i];
        diagonal2 += +element2;
    }

    return `${diagonal1} ${diagonal2}`;
}

console.log(diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]));