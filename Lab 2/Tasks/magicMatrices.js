// function magicMatrices(arr) {
//     const sum = arr[0].reduce((a, b) => a + b, 0);
    
//     let result = true;

//     if (arr.length !== arr[0].length) {
//         return false;
//     }

//     for (let i = 1; i < arr.length; i++) {
//         let currentSum = arr[i].reduce((a, b) => a + b, 0);
//         if (currentSum !== sum) {
//             result = false;
//             break;
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         let currentSum = 0;
//         for (let j = 0; j < arr[i].length; j++) {
//             const element = arr[j][i];
//             if (element === undefined) {
//                 continue;
//             } 
//             currentSum += element;
//         }
//         if (currentSum !== sum) {
//             result = false;
//             break;
//         }
//     }

//     return result;

// }

function magicWithReduce(input) {

    let arr = [];

    for (let i in input) {
        const rowSum = input[i].reduce((a, b) => a + b, 0);
        const colSum = input.reduce((acc, cur) => {
            acc += cur[i];
            return acc;
        }, 0);

        if (rowSum !== colSum || (arr.length > 0 (rowSum !== arr[0] || colSum !== arr[1]))) {
            return false;
        } else if (i === '0') {
            arr.push(rowSum, colSum);
        }
    }

    return true;

}

console.log(magicMatrices([[0, 0, 1]]));