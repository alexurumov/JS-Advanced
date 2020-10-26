function sumFirstLast(arr) {
    result = 0;
    result += +arr[0];
    result += +arr[arr.length - 1];
    return result;
}

console.log(sumFirstLast(['1', '2', '3']));