function solve(arr1, arr2, arr3) {
    let sumLength;
    let avgLength; 

    let length1 = arr1.length;
    let length2 = arr2.length;
    let length3 = arr3.length;

    sumLength = length1 + length2 + length3;
    avgLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(avgLength);
}

solve('pasta', '5', '22.3');

