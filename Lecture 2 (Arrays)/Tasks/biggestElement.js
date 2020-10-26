function biggest(arr) {
    let result = Number.MIN_SAFE_INTEGER;
    arr.forEach(element => {
        element.forEach(num => {
            if(num > result) {
                result = num;
            }
        })
    });

    return result;
}

console.log(biggest([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4] ]));