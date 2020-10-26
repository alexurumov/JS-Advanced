function solve(input){
    const arr = input.match(/\w+/g);

    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        resultArr[i] = arr[i].toUpperCase();
    }
    
    console.log(resultArr.join(", "));
}

solve('hello');
