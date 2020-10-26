function equalNeighbours(arr) {

    let result = 0;

    function checkLeft(i, j, array) {
        if (j === 0) {
            return false;
        }

        return array[i][j] === array[i][j - 1];
        
    }

    function checkAbove(i, j, array) {
        if (i === 0) {
            return false;
        }

        return array[i][j] === array[i - 1][j];
        
    }

    function checkRight(i, j, array) {
        if (j === array.length - 1) {
            return false;
        }

        return array[i][j] === array[i][j + 1];
        
    }

    function checkBelow(i, j, array) {
        if (i === array.length - 1) {
            return false;
        }

        return (array[i][j] === array[i + 1][j]);
        
    }

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr[i].length; j++) {

            const element = arr[i][j];
            if (checkAbove(i, j, arr)) {
                result++;
            }
            if (checkLeft(i, j, arr)) {
                result++;
            }
            if (checkBelow(i, j, arr)) {
                result++;
            }
            if (checkRight(i, j, arr)) {
                result++;
            }
        }
        
    }

    return result / 2;

}

console.log(equalNeighbours([['1', '2', '3'], ['1', '5', '6'], ['7', '8', '9']]));